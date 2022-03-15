import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: '#F8FBFE',
      primary: '#370665',
      secondary: '#33286D',
      accent: '#6C5CE7',
    },
    fonts: {
      general: 'Poppins, sans-serif',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    radii: {
      borderRadius: '4px',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  // utils: {
  //   marginX: value => ({ marginLeft: value, marginRight: value }),
  // },
})

// export const darkTheme = createTheme({
//   colors: {
//     background: '#090011',
//     primary: '#F8FBFE',
//     secondary: '#AEB7C1',
//     accent: '#6C5CE7',
//   },
// })

const globalStyles = globalCss({
  '*': {
    fontFamily: '$general',
    fontWeight: '$regular',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background',
  },
  h1: {
    color: '$primary',
    fontFamily: '$general',
    fontSize: '42px',
    fontWeight: '$bold',
    lineHeight: '46px',
    margin: '0 0 20px',
  },
  h2: {
    color: '$primary',
    margin: '60px 0 0',
    fontSize: '24px',
  },
  p: {
    color: '$secondary',
    margin: '20px 0',
  },
  strong: {
    color: '$accent',
    fontWeight: '$semiBold',
  },
  // a: {
  //   borderBottom: '1px solid $primary',
  //   color: '$primary',
  //   textDecoration: 'none',
  //   transition: 'opacity $duration ease-in-out',
  // },
  // 'a:hover, a:focus': {
  //   opacity: '0.8',
  // },
  '@font-face': [
    {
      fontFamily: 'Poppins',
      src: `url("/static/font/Poppins-Regular.ttf") format("truetype")`,
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/static/font/Poppins-Medium.ttf") format("truetype")`,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/static/font/Poppins-SemiBold.ttf") format("truetype")`,
      fontWeight: '600',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/static/font/Poppins-Bold.ttf") format("truetype")`,
      fontWeight: '700',
      fontStyle: 'normal',
    },
  ],
})

globalStyles()
