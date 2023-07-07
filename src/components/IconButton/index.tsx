import * as S from './styles'
import { useState } from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import { SendPlane2 as SendFill } from '@styled-icons/remix-fill/SendPlane2'
import { SendPlane2 as SendLine } from '@styled-icons/remix-line/SendPlane2'

export type AvailabelIconsEnum = 'send'

type IconType = {
  outlined: React.ReactElement<{}, StyledIcon>
  filled: React.ReactElement<{}, StyledIcon>
}

const IconsRecord: Record<AvailabelIconsEnum, IconType> = {
  send: {
    outlined: <SendLine />,
    filled: <SendFill />
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
