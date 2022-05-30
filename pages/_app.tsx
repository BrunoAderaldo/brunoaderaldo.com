import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { theme, lightTheme } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light: lightTheme, dark: theme }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
