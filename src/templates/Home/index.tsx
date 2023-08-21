import SideMessages from '@/templates/SideMessages'
import * as S from './styles'
import { store } from '@/store'
import { Provider } from 'react-redux'

type HomeProps = {
  children: React.ReactElement
}

const Home = ({ children }: HomeProps) => (
  <Provider store={store}>
    <S.Wrapper>
      <SideMessages />
      {children}
    </S.Wrapper>
  </Provider>
)
export default Home
