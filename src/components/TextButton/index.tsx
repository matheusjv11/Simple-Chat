import * as S from './styles'

export type TextButtonProps = {
  label: string
  color: 'primary' | 'danger'
  disabled?: boolean
}

const TextButton = ({
  label,
  color = 'primary',
  disabled
}: TextButtonProps) => (
  <S.Wrapper disabled={disabled || false} color={color}>
    {label}
  </S.Wrapper>
)
export default TextButton
