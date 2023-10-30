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
  const [showAddButton, setShowAddButton] = useState(false)
  const [showCreateChat, setShowCreateChat] = useState(false)

  const { updateContextValue } = useContext(MobileChatOpenContext)

  return (
    <S.Wrapper
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
    >
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
      <S.FloatingButton
        show={showAddButton}
        onClick={() => setShowCreateChat(true)}
      >
        <AddIcon />
      </S.FloatingButton>
      {showCreateChat && (
        <CreateChat closeModal={() => setShowCreateChat(false)} />
      )}
    </S.Wrapper>
  )
}
export default ChatWrapper
