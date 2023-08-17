import SideMessages from '@/templates/SideMessages'
import MainChat from '@/templates/MainChat'
import * as S from './styles'
import { store } from '@/store'
import { Provider } from 'react-redux'

const Home = () => (
  <Provider store={store}>
    <S.Wrapper>
      <SideMessages />
      <MainChat />
    </S.Wrapper>
  </Provider>
)
export default Home
