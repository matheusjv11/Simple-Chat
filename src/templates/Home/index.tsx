import SideMessages from '@/templates/SideMessages'
import * as S from './styles'
import { useSelector } from 'react-redux'
import GlobalStyles from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import { RootState } from '@/store'
import { ThemeLight, ThemeDark } from '@/styles/theme'

type HomeProps = {
  children: React.ReactElement
}

const Home = ({ children }: HomeProps) => {
  const isDarkTheme = useSelector((state: RootState) => {
    return state.customization.themeMode === 'dark'
  })

  return (
    <ThemeProvider theme={isDarkTheme ? ThemeDark : ThemeLight}>
      <GlobalStyles />
      <S.Wrapper>
        <SideMessages />
        {children}
      </S.Wrapper>
    </ThemeProvider>
  )
}
export default Home
