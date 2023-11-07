import { useState, useContext } from 'react'
import * as S from './styles'
import Link from 'next/link'
import { TypeUtils } from '@/utils/TypeUtils'
import { MobileChatOpenContext } from '@/templates/Home'
import { SingleChatType } from '@/types/SingleChatType'
import { GroupChatType } from '@/types/GroupChatType'
import SingleChatPreview from '@/components/SingleChatPreview'
import GroupChatPreview from '@/components/GroupChatPreview'
import CreateChat from '@/templates/CreateChat'
import { Add as AddIcon } from '@styled-icons/fluentui-system-filled/Add'

type ChatWrapperProps = {
  chats: (SingleChatType | GroupChatType)[]
}

const ChatWrapper = ({ chats }: ChatWrapperProps) => {
  const [showCreateChat, setShowCreateChat] = useState(false)

  const { updateContextValue } = useContext(MobileChatOpenContext)

  return (
    <S.Wrapper>
      {chats.map((chat, i) => (
        <Link
          href={`/chat/${chat.id}`}
          key={i}
          onClick={() => updateContextValue()}
        >
          {TypeUtils.isSingleChatType(chat) ? (
            <SingleChatPreview chat={chat} />
          ) : (
            <GroupChatPreview chat={chat} />
          )}
        </Link>
      ))}
      <S.FloatingButton onClick={() => setShowCreateChat(true)}>
        <AddIcon />
      </S.FloatingButton>
      {showCreateChat && (
        <CreateChat closeModal={() => setShowCreateChat(false)} />
      )}
    </S.Wrapper>
  )
}
export default ChatWrapper
