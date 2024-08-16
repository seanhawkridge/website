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
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ferry": {
          "50": "#fbf3f8",
          "100": "#f6e7f0",
          "200": "#edcfe1",
          "300": "#e4b6d3",
          "400": "#db9ec4",
          "500": "#d286b5",
          "600": "#a86b91",
          "700": "#7e506d",
          "800": "#543648",
          "900": "#2a1b24"
        },
        "sky": {
          "50": "#eef2fc",
          "100": "#dce6f8",
          "200": "#b9cdf2",
          "300": "#96b3eb",
          "400": "#739ae5",
          "500": "#5081de",
          "600": "#4067b2",
          "700": "#304d85",
          "800": "#203459",
          "900": "#101a2c"
        },
        "tree": {
          "50": "#f1f3ed",
          "100": "#e3e6db",
          "200": "#c7cdb7",
          "300": "#aab594",
          "400": "#8e9c70",
          "500": "#72834c",
          "600": "#5b693d",
          "700": "#444f2e",
          "800": "#2e341e",
          "900": "#171a0f"
        },
        "stone": {
          "50": "#f2f0ef",
          "100": "#e5e1de",
          "200": "#cbc3bd",
          "300": "#b1a69d",
          "400": "#97887c",
          "500": "#7d6a5b",
          "600": "#645549",
          "700": "#4b4037",
          "800": "#322a24",
          "900": "#191512"
        }

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
