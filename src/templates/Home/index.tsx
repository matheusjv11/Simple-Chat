import { createContext, useState } from 'react'
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

export const MobileChatOpenContext = createContext({
  isMobileChatOpen: true,
  updateContextValue: () => {}
})

const Home = ({ children }: HomeProps) => {
  const isDarkTheme = useSelector((state: RootState) => {
    return state.customization.themeMode === 'dark'
  })

  const [isMobileChatOpen, setIsMobileChatOpen] = useState(true)

  const updateContextValue = () => {
    setIsMobileChatOpen(!isMobileChatOpen)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? ThemeDark : ThemeLight}>
      <GlobalStyles />
      <S.Wrapper>
        <MobileChatOpenContext.Provider
          value={{ isMobileChatOpen, updateContextValue }}
        >
          <SideMessages />
          {children}
        </MobileChatOpenContext.Provider>
      </S.Wrapper>
    </ThemeProvider>
  )
}
export default Home
