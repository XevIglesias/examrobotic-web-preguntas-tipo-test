tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--ink)',
        primary:    'var(--accent)',
        border:     'var(--line)',
        card:       'var(--surface)',
        muted:      'var(--muted)',
      },
      boxShadow: {
        'card':       'var(--shadow-1)',
        'card-hover': 'var(--shadow-2)',
        'card-pop':   'var(--shadow-3)',
      },
      borderRadius: {
        'xl2': 'var(--radius-lg)',
        'xl3': 'var(--radius-xl)',
      },
    },
  },
};
