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
  chatIds: string[]
}

const ChatWrapper = ({ chatIds }: ChatWrapperProps) => {
  const [showCreateChat, setShowCreateChat] = useState(false)

  const { updateContextValue } = useContext(MobileChatOpenContext)

  return (
    <S.Wrapper>
      {!!chatIds.length ? (
        chatIds.map((id) => (
          <Link
            href={`/chat/${id}`}
            key={id}
            onClick={() => updateContextValue()}
          >
            {TypeUtils.isSingleChatTypeById(id) ? (
              <SingleChatPreview chatId={id} />
            ) : (
              <GroupChatPreview chatId={id} />
            )}
          </Link>
        ))
      ) : (
        <S.NoChatMessage>No chat available.</S.NoChatMessage>
      )}
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
