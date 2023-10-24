import styled, { css } from 'styled-components'

type WrapperProps = {
  imagesize: number
  large: boolean
}

type GroupImageSliceProps = {
  imagesize: number
  currentindex: number
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, imagesize, large }) => css`
    height: ${theme.sizes.imageSize};
    width: ${theme.sizes.imageSize};
    min-width: ${theme.sizes.imageSize};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${imagesize > 2 &&
    css`
      grid-template-rows: 1fr 1fr;
    `}

    ${large &&
    css`
      border-radius: 0;
      width: 100%;
      height: 100%;
    `}
  `}
`

export const GroupImageSlice = styled.img<GroupImageSliceProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme, imagesize, currentindex }) => css`
    ${imagesize === 3 &&
    currentindex === 2 &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
      aspect-ratio: 4/3;
    `}
  `}
`
