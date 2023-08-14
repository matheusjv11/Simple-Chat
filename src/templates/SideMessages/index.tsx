import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import MessagePreview from '@/components/MessagePreview'
import { SingleChatType } from '@/types/SingleChatType'
import { GroupChatType } from '@/types/GroupChatType'
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
        {chats.map((chat) => (
          <MessagePreview />
        ))}
      </S.ChatWrapper>
    </S.Wrapper>
  )
}

export default SideMessages
