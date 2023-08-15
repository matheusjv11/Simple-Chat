import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import MessagePreview from '@/components/MessagePreview'
import { ChatService } from '@/services/ChatService'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'

const SideMessages = () => {
  const chats = ChatService.orderChats([
    ...InitialSingleChats,
    ...InitialGroupChats
  ])

  return (
    <S.Wrapper>
      <S.SearchBox>
        <h2>Messages</h2>
        <SearchInput />
      </S.SearchBox>
      <S.ChatWrapper>
        {chats.map((chat, i) => (
          <MessagePreview chat={chat} key={i} />
        ))}
      </S.ChatWrapper>
    </S.Wrapper>
  )
}

export default SideMessages

/* To enter a chat, we could do it by routing */
