import styled, { DefaultTheme, css } from 'styled-components'
import { ProfilePictureProps } from '.'

type WrapperProps = Pick<ProfilePictureProps, 'profile' | 'size'>

/* Do modifiers to smaller picture */
/* height: 3rem;
width: 3rem; */

const imageSizeModifiers = {
  small: (theme: DefaultTheme) => css`
    height: ${theme.sizes.smallImageSize};
    width: ${theme.sizes.smallImageSize};
  `,

  normal: (theme: DefaultTheme) => css`
    height: ${theme.sizes.imageSize};
    width: ${theme.sizes.imageSize};
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, profile, size }) => css`
    background-image: url(${profile});
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    position: relative;

    ${!!size && imageSizeModifiers[size](theme)}
  `}
`

export const OnlineStatus = styled.div`
  background-color: #88cba6;
  height: 13px;
  width: 13px;
  border-radius: 100%;
  position: absolute;
  bottom: -1px;
  right: 3px;
  border: 1px solid white;
`
