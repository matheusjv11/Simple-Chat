import styled, { css } from 'styled-components'
import { ProfilePictureProps } from '.'

type WrapperProps = Pick<ProfilePictureProps, 'profile'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, profile }) => css`
    background-image: url(${profile});
    height: ${theme.sizes.imageSize};
    width: ${theme.sizes.imageSize};
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    position: relative;
  `}
`

export const OnlineStatus = styled.div`
  background-color: #88cba6;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  position: absolute;
  bottom: -1px;
  right: 3px;
  border: 1px solid white;
`
