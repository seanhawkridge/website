const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Mono"', ...defaultTheme.fontFamily.sans],
        serif: ['"Cormorant Infant"', ...defaultTheme.fontFamily.serif]
      },
      colors: {
    's-orange': {
        '50': '#fff8ed',
        '100': '#fff0d4',
        '200': '#ffdda8',
        '300': '#ffc371',
        '400': '#ff9f38',
        '500': '#fe881d',
        '600': '#ef6507',
        '700': '#c64c08',
        '800': '#9d3c0f',
        '900': '#7e3310',
        '950': '#441706',
    },
    's-green': {
        '50': '#f1f8f2',
        '100': '#deeddf',
        '200': '#bfdbc2',
        '300': '#8dbd96',
        '400': '#66a173',
        '500': '#458455',
        '600': '#326941',
        '700': '#285435',
        '800': '#22432c',
        '900': '#1d3725',
        '950': '#0f1f14',
    },
    's-paper': {
        '50': '#fdfcf7',
        '100': '#f7f3dd',
        '200': '#ede4bb',
        '300': '#e2d08f',
        '400': '#d5b662',
        '500': '#cca143',
        '600': '#be8b38',
        '700': '#9e6f30',
        '800': '#7f592d',
        '900': '#674927',
        '950': '#372513',
    },
    
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
