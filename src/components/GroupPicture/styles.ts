import styled, { css } from 'styled-components'

type WrapperProps = {
  imageSize: number
}

type GroupImageSliceProps = {
  imageSize: number
  currentIndex: number
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, imageSize }) => css`
    height: ${theme.sizes.imageSize};
    width: ${theme.sizes.imageSize};
    min-width: ${theme.sizes.imageSize};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${imageSize > 2 &&
    css`
      grid-template-rows: 1fr 1fr;
    `}
  `}
`

export const GroupImageSlice = styled.img<GroupImageSliceProps>`
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme, imageSize, currentIndex }) => css`
    ${imageSize === 3 &&
    currentIndex === 2 &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
      aspect-ratio: 4/3;
    `}
  `}
`
