module.exports = {
  theme: {
    fontFamily: {
      display: ['Recoleta Alt', 'Georgia', 'serif'],
      body: ['Roboto', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        'sol-base03': '#002b36',
        'sol-base02': '#073642',
        'sol-base01': '#586e75',
        'sol-base00': '#657b83',
        'sol-base0': '#839496',
        'sol-base1': '#93a1a1',
        'sol-base2': '#eee8d5',
        'sol-base3': '#fdf6e3',
        'sol-yellow': '#b58900',
        'sol-orange': '#cb4b16',
        'sol-red': '#dc322f',
        'sol-magenta': '#d33682',
        'sol-violet': '#6c71c4',
        'sol-blue': '#268bd2',
        'sol-cyan': '#2aa198',
        'sol-green': '#859900',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    underline: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
