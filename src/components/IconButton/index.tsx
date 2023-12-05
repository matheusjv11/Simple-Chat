import * as S from './styles'
import { useState, MouseEventHandler } from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import { SendPlane2 as SendFill } from '@styled-icons/remix-fill/SendPlane2'
import { SendPlane2 as SendLine } from '@styled-icons/remix-line/SendPlane2'
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search'
import { Close as CloseOutlineIcon } from '@styled-icons/ionicons-outline/Close'
import { Close as CloseIcon } from '@styled-icons/evil/Close'
import { AngleLeft as LeftArrowIcon } from '@styled-icons/fa-solid/AngleLeft'

export type AvailabelIconsEnum = 'send' | 'search' | 'close' | 'leftArrow'

type IconType = {
  outlined: React.ReactElement<{}, StyledIcon>
  filled: React.ReactElement<{}, StyledIcon>
}

const IconsRecord: Record<AvailabelIconsEnum, IconType> = {
  send: {
    outlined: <SendLine />,
    filled: <SendFill />
  },
  search: {
    outlined: <SearchIcon />,
    filled: <SearchIcon />
  },
  close: {
    outlined: <CloseIcon />,
    filled: <CloseOutlineIcon />
  },
  leftArrow: {
    outlined: <LeftArrowIcon />,
    filled: <LeftArrowIcon />
  }
}

export type IconButtonProps = {
  icon: AvailabelIconsEnum
  description: string
  color?: 'primary' | 'default'
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton = ({
  icon,
  description,
  onClick,
  color = 'default'
}: IconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      aria-label={description}
    >
      {isHovering ? IconsRecord[icon].filled : IconsRecord[icon].outlined}
    </S.Wrapper>
  )
}
export default IconButton
