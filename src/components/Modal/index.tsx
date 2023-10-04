import { createPortal } from 'react-dom'
import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  onClickOutside: () => void
}

const Modal = ({ children, onClickOutside }: ModalProps) => {
  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.ModalMain onClick={onClickOutside}>{children}</S.ModalMain>
        </S.Wrapper>,
        document.body
      )}
    </>
  )
}
export default Modal
