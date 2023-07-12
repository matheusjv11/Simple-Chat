import 'styled-components'
import MyTheme from '@/styles/theme'

type Theme = typeof MyTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
