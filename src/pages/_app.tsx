import GlobalStyles from '@/styles/globals'
import { MyTheme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MyTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
