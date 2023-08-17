import { useSelector } from 'react-redux'
import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { TypeUtils } from '@/utils/TypeUtils'
import SingleChatPreview from '@/components/SingleChatPreview'
import GroupChatPreview from '@/components/GroupChatPreview'
import { RootState } from '@/store'

const SideMessages = () => {
  const chats = useSelector((state: RootState) => state.chats.userChats)

  /*   const chats = useMemo()
  // returns memorized ordered an pinned chats
 */

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
            <GroupChatPreview chat={chat} key={`${i}_group`} />
          )
        )}
      </S.ChatWrapper>
    </S.Wrapper>
  )
}

export default SideMessages

/* To enter a chat, we could do it by routing */
