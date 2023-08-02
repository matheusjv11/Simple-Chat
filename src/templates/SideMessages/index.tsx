import * as S from './styles'
import SearchInput from '@/components/SearchInput'

const SideMessages = () => (
  <S.Wrapper>
    <S.SearchBox>
      <h2>Messages</h2>
      <SearchInput />
    </S.SearchBox>
    {/* Chat Card */}
  </S.Wrapper>
)

export default SideMessages
