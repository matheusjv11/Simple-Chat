import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-light-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-medium-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-regular-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
   
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-semibold-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-bold-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.02s ease-in-out, color 0.02s ease-in-out;
        
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.sizes.medium};
      }

      html,
      body,
      #__next {
        height: 100%;
      }
    `}
    
    p {
        font-weight: 500;
    }

    .custom-scroll::-webkit-scrollbar {
        width: 10px;
    }
        
    .custom-scroll::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    .custom-scroll::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid transparent;
        background-clip: content-box;

        ${({ theme }) => css`
          background-color: ${theme.boxColors.scroll};
        `}
    }

    .home-page {
        ${({ theme }) => css`
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          height: 100%;
          width: 100%;
          background-color: pink;
          background: ${theme.boxColors.chatBackground};
          color: ${theme.colors.heading};
          padding-top: 10vh;
          padding-left: 2rem;
          padding-right: 2rem;

          .home-description-card {
            margin-top: 2rem;
            padding: 1.5rem;
            backdrop-filter: blur(30px);
            border-radius: 15px;
            background-color: ${theme.boxColors.optionsBackground};
            max-width: 700px;

            p {
              line-height: 2.5rem;
            }
          }
        `}
    }

    .background-fancy-image::before {
      content: '';
      background-image: url('../img/chat-background.png');
      background-size: 190px 190px;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.15;
      z-index: 1;
    }
`
export default GlobalStyles
