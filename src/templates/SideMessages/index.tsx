import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import MessagePreview from '@/components/MessagePreview'
import { SingleChatType } from '@/types/SingleChatType'
import { GroupChatType } from '@/types/GroupChatType'

const SideMessages = () => {
  const messages: SingleChatType[] | GroupChatType[] = [
    {
      pinned: false,
      member: 'arya',
      messages: []
    }
  ]

  return (
    <S.Wrapper>
      <S.SearchBox>
        <h2>Messages</h2>
        <SearchInput />
      </S.SearchBox>
      <S.MessageWrapper>
        {messages.map((message) => (
          <MessagePreview />
        ))}
      </S.MessageWrapper>
    </S.Wrapper>
  )
}

export default SideMessages
