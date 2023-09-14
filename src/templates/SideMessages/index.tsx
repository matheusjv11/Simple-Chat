import { useSelector } from 'react-redux'
import Link from 'next/link'
import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatPreview from '@/components/SingleChatPreview'
import GroupChatPreview from '@/components/GroupChatPreview'
import { RootState } from '@/store'

const SideMessages = () => {
  const chats = useSelector((state: RootState) => {
    const chatsValues = Object.values(state.chats.userChats)
    const filteredChats = ChatService.filterChats(
      chatsValues,
      state.chats.chatFilter
    )

    return ChatService.orderChats(filteredChats)
  })

  return (
    <S.Wrapper>
      <S.SearchBox>
        <h2>Chats</h2>
        <SearchInput />
      </S.SearchBox>
      <S.ChatWrapper>
        {chats.map((chat, i) => (
          <Link href={`/chat/${chat.id}`} key={i}>
            {TypeUtils.isSingleChatType(chat) ? (
              <SingleChatPreview chat={chat} />
            ) : (
              <GroupChatPreview chat={chat} />
            )}
          </Link>
        ))}
      </S.ChatWrapper>
    </S.Wrapper>
  )
}

export default SideMessages

/* To enter a chat, we could do it by routing */
