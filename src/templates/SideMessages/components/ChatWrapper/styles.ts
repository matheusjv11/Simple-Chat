import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.4rem;
  flex: 1;
  position: relative;

  > main {
    padding: 1rem;

    &:not(:last-of-type) {
      ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.border};
      `}
    }
  }

  > a {
    text-decoration: none;
    color: unset;
  }
`

export const FloatingButton = styled.button<{ show: boolean }>`
  ${({ theme, show }) => css`
    display: ${show ? 'flex' : 'none'};
    position: absolute;
    border: none;
    background-color: ${theme.colors.primary};
    color: white;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: sliding-up 0.3s ease;

    > svg {
      height: 35px;
    }

    @media (max-width: 750px) {
      display: flex;
    }
  `}

  @keyframes sliding-up {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
