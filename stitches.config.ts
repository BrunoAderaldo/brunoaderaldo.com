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
      background: '#090011',
      background_1: '#30255D',
      primary: '#F8FBFE',
      secondary: '#AEB7C1',
      // accent: '#6C5CE7',
      accent: '#ca79e3',
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
      borderRadius: '0.25rem',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
})

export const lightTheme = createTheme({
  colors: {
    background: '#F8FBFE',
    background_1: '#ECF2FF',
    primary: '#370665',
    secondary: '#33286D',
    // accent: '#6C5CE7',
    accent: '#ca79e3',
  },
})

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
    fontSize: '30px',
    fontWeight: '$bold',
    lineHeight: '46px',
    margin: '0 0 20px',
  },
  h2: {
    color: '$primary',
    margin: '60px 0 0',
    fontSize: '18px',
    fontWeight: '$medium',
    letterSpacing: '-.5px',
  },
  p: {
    color: '$secondary',
    margin: '16px 0',
  },
  strong: {
    color: '$accent',
    fontWeight: '$semiBold',
  },
  '@font-face': [
    {
      fontFamily: 'Poppins',
      src: `url("/fonts/Poppins-Regular.ttf") format("truetype")`,
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/fonts/Poppins-Medium.ttf") format("truetype")`,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/fonts/Poppins-SemiBold.ttf") format("truetype")`,
      fontWeight: '600',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: `url("/fonts/Poppins-Bold.ttf") format("truetype")`,
      fontWeight: '700',
      fontStyle: 'normal',
    },
  ],
})

globalStyles()
