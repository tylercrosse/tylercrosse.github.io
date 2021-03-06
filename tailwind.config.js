module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      display: ['Recoleta Alt', 'Georgia', 'serif'],
      body: ['Roboto', 'Helvetica', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '375px',
      },
      transitionProperty: { width: 'width' },
      colors: {
        'sol-yellow': 'var(--sol-yellow)',
        'sol-orange': 'var(--sol-orange)',
        'sol-red': 'var(--sol-red)',
        'sol-magenta': 'var(--sol-magenta)',
        'sol-violet': 'var(--sol-violet)',
        'sol-blue': 'var(--sol-blue)',
        'sol-cyan': 'var(--sol-cyan)',
        'sol-green': 'var(--sol-green)',
        'sol-light-0': 'var(--sol-light-0)',
        'sol-light-1': 'var(--sol-light-1)',
        'sol-light-2': 'var(--sol-light-2)',
        'sol-light-3': 'var(--sol-light-3)',
        'sol-light-4': 'var(--sol-light-4)',
        'sol-light-5': 'var(--sol-light-5)',
        'sol-light-6': 'var(--sol-light-6)',
        'sol-light-7': 'var(--sol-light-7)',
        'sol-light-8': 'var(--sol-light-8)',
        'sol-light-9': 'var(--sol-light-9)',
        'sol-light-10': 'var(--sol-light-10)',
        'sol-dark-0': 'var(--sol-dark-0)',
        'sol-dark-1': 'var(--sol-dark-1)',
        'sol-dark-2': 'var(--sol-dark-2)',
        'sol-dark-3': 'var(--sol-dark-3)',
        'sol-dark-4': 'var(--sol-dark-4)',
        'sol-dark-5': 'var(--sol-dark-5)',
        'sol-dark-6': 'var(--sol-dark-6)',
        'sol-dark-7': 'var(--sol-dark-7)',
        'sol-dark-9': 'var(--sol-dark-9)',
        'sol-dark-10': 'var(--sol-dark-10)',
        'theme-p0': 'var(--theme-p0)',
        'theme-p1': 'var(--theme-p1)',
        'theme-p2': 'var(--theme-p2)',
        'theme-p3': 'var(--theme-p3)',
        'theme-p4': 'var(--theme-p4)',
        'theme-p5': 'var(--theme-p5)',
        'theme-p6': 'var(--theme-p6)',
        'theme-p7': 'var(--theme-p7)',
        'theme-p8': 'var(--theme-p8)',
        'theme-p9': 'var(--theme-p9)',
        'theme-p10': 'var(--theme-p10)',
        'theme-s0': 'var(--theme-s0)',
        'theme-s1': 'var(--theme-s1)',
        'theme-s2': 'var(--theme-s2)',
        'theme-s3': 'var(--theme-s3)',
        'theme-s4': 'var(--theme-s4)',
        'theme-s5': 'var(--theme-s5)',
        'theme-s6': 'var(--theme-s6)',
        'theme-s7': 'var(--theme-s7)',
        'theme-s8': 'var(--theme-s8)',
        'theme-s9': 'var(--theme-s9)',
        'theme-s10': 'var(--theme-s10)',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    underline: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
