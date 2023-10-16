import * as S from './styles'
import Modal from '@/components/Modal'
import IconButton from '@/components/IconButton'
import ContactList from './components/ContactList'

export type ChatOptionsProps = {
  closeModal: () => void
}

const CreateChat = ({ closeModal }: ChatOptionsProps) => {
  return (
    <Modal onClickOutside={closeModal} darkBackground={true}>
      <S.Wrapper>
        <S.Header>
          <h3>CreateChat</h3>
          <IconButton icon={'close'} onClick={closeModal} />
        </S.Header>
        <ContactList />
      </S.Wrapper>
    </Modal>
  )
}
export default CreateChat
