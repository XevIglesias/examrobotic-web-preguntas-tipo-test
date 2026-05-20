tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                background: 'var(--bg-color)',
                foreground: 'var(--text-color)',
                primary:    'var(--primary-color)',
                border:     'var(--border-color)',
                card:       'var(--card-color)',
                muted:      'var(--muted-color)',
            },
            boxShadow: {
                'card':       '0 2px 8px 0 rgba(11,32,64,0.07)',
                'card-hover': '0 8px 24px -4px rgba(11,32,64,0.13)',
            },
        },
    },
}
