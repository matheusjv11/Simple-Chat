import { useState } from 'react'
import * as S from './styles'
import Modal from '@/components/Modal'
import IconButton from '@/components/IconButton'
import ContactList from './components/ContactList'
import { ChatService } from '@/services/ChatService'

export type ChatOptionsProps = {
  closeModal: () => void
}

const CreateChat = ({ closeModal }: ChatOptionsProps) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [firstMessage, setfirstMessage] = useState('')
  const [groupName, setGroupName] = useState('')
  const [groupDescription, setGroupDescription] = useState('')

  const updateUserList = (id: string) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers([...selectedUsers.filter((userId) => id !== userId)])
      return
    }

    setSelectedUsers([...selectedUsers, id])
  }

  const createNewChat = () => {
    if (selectedUsers.length === 1) {
      ChatService.createSingleChat(selectedUsers[0], firstMessage)
    } else {
      ChatService.createGroupChat(
        selectedUsers,
        firstMessage,
        groupName,
        groupDescription
      )
    }

    closeModal()
  }

  return (
    <Modal onClickOutside={closeModal} darkBackground={true}>
      <S.Wrapper>
        <S.Header>
          <h3>Create a chat</h3>
          <IconButton icon={'close'} onClick={closeModal} />
        </S.Header>
        <ContactList updateUserList={updateUserList} userList={selectedUsers} />
        <S.InfomationForm>
          <label>
            First Message
            <input
              type="text"
              onChange={(e) => setfirstMessage(e.target.value)}
            />
          </label>
          <label>
            Group name
            <input type="text" onChange={(e) => setGroupName(e.target.value)} />
          </label>
          <label>
            Group description
            <input
              type="text"
              onChange={(e) => setGroupDescription(e.target.value)}
            />
          </label>
        </S.InfomationForm>
        <S.Footer>
          <S.CreateButton onClick={createNewChat}>Create</S.CreateButton>
        </S.Footer>
      </S.Wrapper>
    </Modal>
  )
}
export default CreateChat
