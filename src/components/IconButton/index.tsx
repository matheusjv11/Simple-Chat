import * as S from './styles'
import { useState, MouseEventHandler } from 'react'
import { StyledIcon } from '@styled-icons/styled-icon'
import { SendPlane2 as SendFill } from '@styled-icons/remix-fill/SendPlane2'
import { SendPlane2 as SendLine } from '@styled-icons/remix-line/SendPlane2'
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search'
import { CloseCircleOutline as CloseCircleOutlineIcon } from '@styled-icons/evaicons-outline/CloseCircleOutline'
import { CloseCircle as CloseCircleIcon } from '@styled-icons/evaicons-solid/CloseCircle'

export type AvailabelIconsEnum = 'send' | 'search' | 'close'

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
    outlined: <CloseCircleOutlineIcon />,
    filled: <CloseCircleIcon />
  }
}

export type IconButtonProps = {
  icon: AvailabelIconsEnum
  color?: 'primary' | 'default'
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton = ({ icon, onClick, color = 'default' }: IconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {isHovering ? IconsRecord[icon].filled : IconsRecord[icon].outlined}
    </S.Wrapper>
  )
}
export default IconButton
