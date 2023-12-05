import { createPortal } from 'react-dom'
import { MouseEventHandler } from 'react'
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
  const clickOutside = (e: MouseEventHandler<HTMLDivElement> | undefined) => {
    if (e) {
      if (e.target.id === 'modal-main') {
        e.preventDefault()
        e.stopPropagation()
        onClickOutside()
      }
    }
  }

  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.ModalMain
            id="modal-main"
            darkBackground={darkBackground}
            onClick={clickOutside}
          >
            {children}
          </S.ModalMain>
        </S.Wrapper>,
        document.body
      )}
    </>
  )
}
export default Modal
