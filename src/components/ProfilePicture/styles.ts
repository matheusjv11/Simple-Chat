import styled, { DefaultTheme, css } from 'styled-components'
import { ProfilePictureProps } from '.'

type WrapperProps = Pick<ProfilePictureProps, 'size'> & { profile: string }

const imageSizeModifiers = {
  small: (theme: DefaultTheme) => css`
    height: ${theme.sizes.smallImageSize};
    width: ${theme.sizes.smallImageSize};
    min-width: ${theme.sizes.smallImageSize};
  `,

  normal: (theme: DefaultTheme) => css`
    height: ${theme.sizes.imageSize};
    width: ${theme.sizes.imageSize};
    min-width: ${theme.sizes.imageSize};
  `,

  large: (theme: DefaultTheme) => css`
    height: 100%;
    width: 100%;
    border-radius: 0;
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, profile, size }) => css`
    background-image: url(${profile});
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    position: relative;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

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
