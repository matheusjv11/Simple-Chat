import * as S from './styles'
import { useState } from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import { Send } from '@styled-icons/bootstrap/Send'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'

export type AvailabelIconsEnum = 'send'

type IconType = {
  outlined: React.ReactElement<{}, StyledIcon>
  filled: React.ReactElement<{}, StyledIcon>
}

const IconsRecord: Record<AvailabelIconsEnum, IconType> = {
  send: {
    outlined: <Send />,
    filled: <SendPlane />
  }
}

type IconButtonProps = {
  icon: AvailabelIconsEnum
}

const IconButton = ({ icon }: IconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? IconsRecord[icon].filled : IconsRecord[icon].outlined}
    </S.Wrapper>
  )
}
export default IconButton
