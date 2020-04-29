module.exports = {
  theme: {
    fontFamily: {
      display: ['Recoleta Alt', 'Georgia', 'serif'],
      body: ['Roboto', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        'sol-base00': 'var(--sol-base00)',
        'sol-base01': 'var(--sol-base01)',
        'sol-base02': 'var(--sol-base02)',
        'sol-base03': 'var(--sol-base03)',
        'sol-base0': 'var(--sol-base0)',
        'sol-base1': 'var(--sol-base1)',
        'sol-base2': 'var(--sol-base2)',
        'sol-base3': 'var(--sol-base3)',
        'sol-yellow': 'var(--sol-yellow)',
        'sol-orange': 'var(--sol-orange)',
        'sol-red': 'var(--sol-red)',
        'sol-magenta': 'var(--sol-magenta)',
        'sol-violet': 'var(--sol-violet)',
        'sol-blue': 'var(--sol-blue)',
        'sol-cyan': 'var(--sol-cyan)',
        'sol-green': 'var(--sol-green)',
        'theme-0': 'var(--theme-0)',
        'theme-1': 'var(--theme-1)',
        'theme-2': 'var(--theme-2)',
        'theme-3': 'var(--theme-3)',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    underline: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
