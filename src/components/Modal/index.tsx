import { createPortal } from 'react-dom'
import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  onClickOutside: () => void
  darkBackground?: boolean
}

const Modal = ({
  children,
  onClickOutside,
  darkBackground = false
}: ModalProps) => {
  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.ModalMain darkBackground={darkBackground} onClick={onClickOutside}>
            {children}
          </S.ModalMain>
        </S.Wrapper>,
        document.body
      )}
    </>
  )
}
export default Modal
