import { createPortal } from 'react-dom'
import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const closeCallBack = () => {}
  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.ModalMain>{children}</S.ModalMain>
        </S.Wrapper>,
        document.body
      )}
    </>
  )
}
export default Modal
