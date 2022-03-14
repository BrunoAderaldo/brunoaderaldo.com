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
      violet: '#370665',
      purple: '#6C5CE7',
    },
    fonts: {
      general: 'Poppins, sans-serif',
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

const globalStyles = globalCss({
  '*': {
    fontFamily: '$general',
  },

  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background',
  },

  figure: {
    margin: 0,
  },

  h1: {
    fontFamily: '$general',
    fontSize: '48px',
    lineHeight: '50px',
    margin: '0 0 20px',
    color: '$primary',
  },

  h2: {
    color: '$primary',
    margin: '60px 0 0',
    fontSize: '24px',
  },

  'h3, h3 a': {
    color: '$primary',
    fontSize: '18px',
    margin: '20px 0 0',
  },

  ul: {
    margin: 0,
  },

  img: {
    borderRadius: '8px',
    minWidth: '100%',
    maxWidth: '100%',
  },

  p: {
    margin: '20px 0',
    color: '$secondary',
  },

  strong: {
    color: '$primary',
    fontWeight: 500,
  },

  blockquote: {
    borderLeft: '4px solid $hover',
    color: '$secondary',
    fontStyle: 'italic',
    margin: '0',
    paddingLeft: '20px',
  },

  a: {
    borderBottom: '1px solid $primary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out',
  },

  'a:hover, a:focus': {
    opacity: '0.8',
  },

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
