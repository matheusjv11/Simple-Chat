import { useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import { TypeUtils } from '@/utils/TypeUtils'
import { SingleChatType } from '@/types/SingleChatType'
import { GroupChatType } from '@/types/GroupChatType'
import SingleChatPreview from '@/components/SingleChatPreview'
import GroupChatPreview from '@/components/GroupChatPreview'
import { Add as AddIcon } from '@styled-icons/fluentui-system-filled/Add'

type ChatWrapperProps = {
  chats: (SingleChatType | GroupChatType)[]
}

const ChatWrapper = ({ chats }: ChatWrapperProps) => {
  const [isAddButtonOpen, setIsAddButtonOpen] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsAddButtonOpen(true)}
      onMouseLeave={() => setIsAddButtonOpen(false)}
    >
      {chats.map((chat, i) => (
        <Link href={`/chat/${chat.id}`} key={i}>
          {TypeUtils.isSingleChatType(chat) ? (
            <SingleChatPreview chat={chat} />
          ) : (
            <GroupChatPreview chat={chat} />
          )}
        </Link>
      ))}
      <S.FloatingButton open={isAddButtonOpen}>
        <AddIcon />
      </S.FloatingButton>
    </S.Wrapper>
  )
}
export default ChatWrapper
