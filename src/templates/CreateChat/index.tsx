import { useState, useEffect } from 'react'
import * as S from './styles'
import Modal from '@/components/Modal'
import IconButton from '@/components/IconButton'
import ContactList from './components/ContactList'
import InformationForm from './components/InformationForm'
import { ChatService } from '@/services/ChatService'
import TextButton from '@/components/TextButton'
import { useRouter } from 'next/router'

export type ChatOptionsProps = {
  closeModal: () => void
}

export type ChatSettingsType = {
  message: string
  groupName: string
  groupDescription: string
}

const CreateChat = ({ closeModal }: ChatOptionsProps) => {
  const router = useRouter()

  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [createDisabled, setCreateDisabled] = useState(true)
  const [chatSettings, setChatSettings] = useState<ChatSettingsType>({
    message: '',
    groupName: '',
    groupDescription: ''
  })

  const updateUserList = (id: string) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers([...selectedUsers.filter((userId) => id !== userId)])
      return
    }

    setSelectedUsers([...selectedUsers, id])
  }

  const createNewChat = () => {
    let chatId = ''

    if (selectedUsers.length === 1) {
      chatId = ChatService.createSingleChat(
        selectedUsers[0],
        chatSettings.message
      )
    } else {
      chatId = ChatService.createGroupChat(
        selectedUsers,
        chatSettings.message,
        chatSettings.groupName,
        chatSettings.groupDescription
      )
    }

    router.push('/chat/' + chatId)
    closeModal()
  }

  const canCreateSingleChat = () => {
    return selectedUsers.length === 1 && !!chatSettings.message
  }

  const canCreateGroupChat = () => {
    return (
      selectedUsers.length > 1 &&
      !!chatSettings.message &&
      !!chatSettings.groupName &&
      !!chatSettings.groupDescription
    )
  }

  useEffect(() => {
    if (canCreateSingleChat()) {
      setCreateDisabled(false)
      return
    }

    if (canCreateGroupChat()) {
      setCreateDisabled(false)
      return
    }

    setCreateDisabled(true)
  }, [chatSettings, selectedUsers])

  return (
    <Modal onClickOutside={closeModal} darkBackground={true}>
      <S.Wrapper>
        <S.Header>
          <h3>Create a chat</h3>
          <IconButton icon={'close'} onClick={closeModal} />
        </S.Header>
        <ContactList updateUserList={updateUserList} userList={selectedUsers} />
        <InformationForm
          setChatSettings={setChatSettings}
          membersSize={selectedUsers.length}
        />
        <S.Footer>
          <TextButton
            label="Create"
            disabled={createDisabled}
            color="primary"
            onClick={createNewChat}
          />
        </S.Footer>
      </S.Wrapper>
    </Modal>
  )
}
export default CreateChat
