import * as S from './styles'
import { MouseEventHandler } from 'react'

export type TextButtonProps = {
  label: string
  color: 'primary' | 'danger'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const TextButton = ({
  label,
  color = 'primary',
  disabled,
  onClick
}: TextButtonProps) => (
  <S.Wrapper disabled={disabled || false} color={color} onClick={onClick}>
    {label}
  </S.Wrapper>
)
export default TextButton
