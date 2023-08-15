import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatPreview from '@/components/SingleChatPreview'
import GroupChatPreview from '@/components/GroupChatPreview'

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
        {chats.map((chat, i) =>
          TypeUtils.isSingleChatType(chat) ? (
            <SingleChatPreview chat={chat} key={i} />
          ) : (
            <div>call group component</div>
          )
        )}
      </S.ChatWrapper>
    </S.Wrapper>
  )
}

export default SideMessages

/* To enter a chat, we could do it by routing */
