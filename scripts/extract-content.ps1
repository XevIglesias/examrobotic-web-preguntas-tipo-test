#Requires -Version 5.1
param(
    [switch]$WhatIf,
    [string]$ZipPath = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$SiteRoot = $PSScriptRoot | Split-Path -Parent
if (-not $ZipPath) {
    $ZipPath = Join-Path ($SiteRoot | Split-Path -Parent) "Universae.zip"
}
$OutRoot    = Join-Path $SiteRoot "assets\pdfs\content"
$DataJsPath = Join-Path $SiteRoot "assets\js\content-data.js"

$subjectMap = [ordered]@{}
$subjectMap["1, Documentaci"] = "PARTIAL"  # placeholder, real matching below

# Real subject folder names exactly as they appear in the ZIP
$subjectFolders = [ordered]@{}
$subjectFolders["1, Documentaci"] = "dt"

# Use exact byte-comparison via array - avoids encoding issues in script file
# We match by checking the start of the folder name with a prefix
function Get-SubjectCode([string]$folder) {
    if ($folder -like "1,*") { return "dt" }
    if ($folder -like "2.*Inform*") { return "ii" }
    if ($folder -like "3.*Sistemas de medida*") { return "sdmyr" }
    if ($folder -like "4.*Itinerario*") { return "iplei" }
    if ($folder -like "5.*ngl*") { return "ip" }
    if ($folder -like "6.*Sistemas de potencia*") { return "sdp" }
    if ($folder -like "7.*") { return "seneh" }
    if ($folder -like "8.*") { return "ssp" }
    if ($folder -like "9.*") { return "adiple" }
    return $null
}

function Get-TypeCode([string]$folder) {
    if ($folder -eq "1. Tema") { return "temas" }
    if ($folder -like "2. Resumenes*") { return "resumenes" }
    if ($folder -like "3. Diapositivas*") { return "diapositivas" }
    if ($folder -like "4. Infograf*") { return "infografias" }
    if ($folder -like "5. Profesor180") { return "profesor180" }
    if ($folder -like "Anexo*") { return "anexos" }
    if ($folder -like "trabajo*") { return "trabajos" }
    return $null
}

function Get-UnitNumber([string]$folder) {
    if ($folder -match '^U(\d+)\s') { return [int]$Matches[1] }
    return $null
}

function Sanitize-Name([string]$name) {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($name)
    # Decompose Unicode and strip non-ASCII (handles all accented chars)
    $normalized = $base.Normalize([System.Text.NormalizationForm]::FormD)
    $ascii = [System.Text.RegularExpressions.Regex]::Replace($normalized, '[^\x20-\x7E]', '')
    $safe = $ascii `
        -replace '[^a-zA-Z0-9 _\-\.]', '_' `
        -replace '\s+', '_' `
        -replace '_+', '_' `
        -replace '^_|_$', ''
    if ($safe.Length -gt 80) { $safe = $safe.Substring(0, 80) }
    return $safe + ".pdf"
}

if (-not (Test-Path $ZipPath)) {
    Write-Error "ZIP not found: $ZipPath"
    exit 1
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
Write-Host "Opening ZIP: $ZipPath" -ForegroundColor Cyan
$zip = [System.IO.Compression.ZipFile]::OpenRead($ZipPath)

# $data[$subjectCode][$typeCode][$unitNum] = List<string>
$data = @{}
foreach ($code in @('dt','ii','sdmyr','iplei','ip','sdp','seneh','ssp','adiple')) {
    $data[$code] = @{}
}

$copiedCount  = 0
$skippedCount = 0

foreach ($entry in $zip.Entries) {
    $fullName = $entry.FullName
    if (-not $fullName.EndsWith('.pdf')) { continue }

    $parts = $fullName -split '/'
    # Expected: Universae / subject / unit / type / file.pdf  (5 parts)
    if ($parts.Count -ne 5) { continue }

    $subjFolder = $parts[1]
    $unitFolder = $parts[2]
    $typeFolder = $parts[3]
    $fileName   = $parts[4]

    $subjCode = Get-SubjectCode $subjFolder
    if (-not $subjCode) { $skippedCount++; continue }

    $unitNum = Get-UnitNumber $unitFolder
    if ($null -eq $unitNum) { $skippedCount++; continue }

    $typeCode = Get-TypeCode $typeFolder
    if (-not $typeCode) { $skippedCount++; continue }

    $safeName = Sanitize-Name $fileName
    $relPath  = "assets/pdfs/content/$subjCode/u$unitNum/$typeCode/$safeName"
    $destPath = Join-Path $SiteRoot ($relPath -replace '/', '\')

    if ($WhatIf) {
        Write-Host ("  " + $subjCode + " | U" + $unitNum + " | " + $typeCode + " | " + $safeName) -ForegroundColor Yellow
    } else {
        $destDir = Split-Path $destPath -Parent
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
        $stream = $entry.Open()
        try {
            $fs = [System.IO.File]::Create($destPath)
            $stream.CopyTo($fs)
            $fs.Close()
        } finally {
            $stream.Close()
        }
    }

    if (-not $data[$subjCode].ContainsKey($typeCode)) { $data[$subjCode][$typeCode] = @{} }
    if (-not $data[$subjCode][$typeCode].ContainsKey($unitNum)) {
        $data[$subjCode][$typeCode][$unitNum] = [System.Collections.Generic.List[string]]::new()
    }
    $data[$subjCode][$typeCode][$unitNum].Add($relPath)
    $copiedCount++
}

$zip.Dispose()
Write-Host ("PDFs procesados: " + $copiedCount) -ForegroundColor Green
Write-Host ("Entradas omitidas: " + $skippedCount) -ForegroundColor Gray

if ($WhatIf) {
    Write-Host ""
    Write-Host "Dry-run OK. Run without -WhatIf to extract files." -ForegroundColor Cyan
    exit 0
}

# ---- Generate content-data.js ----
Write-Host ("Generating " + $DataJsPath + " ...") -ForegroundColor Cyan

$platformPdfs = @{
    dt     = "assets/pdfs/dt.pdf"
    ii     = "assets/pdfs/ii.pdf"
    sdmyr  = "assets/pdfs/sdmyr.pdf"
    iplei  = "assets/pdfs/iplei.pdf"
    ip     = "assets/pdfs/ip.pdf"
    sdp    = "assets/pdfs/sdp.pdf"
    seneh  = "assets/pdfs/seneh.pdf"
    ssp    = "assets/pdfs/ssp.pdf"
    adiple = "assets/pdfs/adiple.pdf"
}

$subjectOrder = @('dt','ii','sdmyr','iplei','ip','sdp','seneh','ssp','adiple')
$typeOrder    = @('temas','resumenes','diapositivas','infografias','profesor180','anexos','trabajos')

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add("// AUTO-GENERATED by scripts/extract-content.ps1 - DO NOT EDIT")
$lines.Add("// Generated: " + (Get-Date -Format 'yyyy-MM-ddTHH:mm:ss'))
$lines.Add("window.CONTENT_DATA = {")

for ($si = 0; $si -lt $subjectOrder.Count; $si++) {
    $code          = $subjectOrder[$si]
    $isLastSubject = ($si -eq $subjectOrder.Count - 1)

    # Collect available types for this subject
    $availableTypes = [System.Collections.Generic.List[string]]::new()
    foreach ($t in $typeOrder) {
        if ($data[$code].ContainsKey($t) -and $data[$code][$t].Count -gt 0) {
            $availableTypes.Add($t)
        }
    }
    # resumenes always present (platform PDF exists even if no Universae resumenes)
    if (-not $availableTypes.Contains('resumenes')) { $availableTypes.Insert(0, 'resumenes') }

    $lines.Add("  " + $code + ": {")

    for ($ti = 0; $ti -lt $availableTypes.Count; $ti++) {
        $typeCode   = $availableTypes[$ti]
        $isLastType = ($ti -eq $availableTypes.Count - 1)

        $lines.Add("    " + $typeCode + ": {")

        if ($typeCode -eq 'resumenes') {
            $platformPath = $platformPdfs[$code]
            # Check if there are also Universae resumenes
            $hasUniversaeResumenes = $data[$code].ContainsKey('resumenes') -and $data[$code]['resumenes'].Count -gt 0
            if ($hasUniversaeResumenes) {
                $lines.Add('      "platform": "' + $platformPath + '",')
            } else {
                $lines.Add('      "platform": "' + $platformPath + '"')
            }
        }

        if ($data[$code].ContainsKey($typeCode)) {
            $unitKeys = $data[$code][$typeCode].Keys | Sort-Object { [int]$_ }
            $unitArr  = @($unitKeys)
            for ($ui = 0; $ui -lt $unitArr.Count; $ui++) {
                $unitNum    = $unitArr[$ui]
                $isLastUnit = ($ui -eq $unitArr.Count - 1)
                $files      = $data[$code][$typeCode][$unitNum]
                $unitTrail  = if ($isLastUnit) { "" } else { "," }

                if ($files.Count -eq 1) {
                    $lines.Add('      ' + $unitNum + ': "' + $files[0] + '"' + $unitTrail)
                } else {
                    $lines.Add("      " + $unitNum + ": [")
                    for ($fi = 0; $fi -lt $files.Count; $fi++) {
                        $fTrail = if ($fi -eq $files.Count - 1) { "" } else { "," }
                        $lines.Add('        "' + $files[$fi] + '"' + $fTrail)
                    }
                    $lines.Add("      ]" + $unitTrail)
                }
            }
        }

        $typeTrail = if ($isLastType) { "" } else { "," }
        $lines.Add("    }" + $typeTrail)
    }

    $subjTrail = if ($isLastSubject) { "" } else { "," }
    $lines.Add("  }" + $subjTrail)
}

$lines.Add("};")

[System.IO.File]::WriteAllLines($DataJsPath, $lines, [System.Text.UTF8Encoding]::new($false))
Write-Host "content-data.js generated OK." -ForegroundColor Green
Write-Host "DONE." -ForegroundColor Green
