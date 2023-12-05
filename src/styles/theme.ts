interface Theme {
  font: {
    family: string
    light: number
    medium: number
    regular: number
    semibold: number
    bold: number
  }
  sizes: {
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
    smallImageSize: string
    imageSize: string
  }
  colors: {
    primary: string
    greyText: string
    lightGrey: string
    border: string
    chatHover: string
    secondaryText: string
    heading: string
    danger: string
  }
  boxColors: {
    primaryBackground: string
    secondaryBackground: string
    chatBackground: string
    currentMessageBackground: string
    selectedChat: string
    scroll: string
    optionsBackground: string
    optionsShadow: string
  }
}

export const ThemeLight: Theme = {
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    medium: 400,
    regular: 500,
    semibold: 600,
    bold: 700
  },
  sizes: {
    xsmall: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xlarge: '2.0rem',
    xxlarge: '2.8rem',
    smallImageSize: '3rem',
    imageSize: '4.5rem'
  },
  colors: {
    primary: '#7209b7',
    heading: '#353535',
    greyText: '#555456',
    lightGrey: '#cfcfcf',
    border: '#ebebeb',
    chatHover: '#f4f4f5',
    secondaryText: '#707579',
    danger: '#d81818'
  },
  boxColors: {
    primaryBackground: 'white',
    secondaryBackground: '#f0f2f5',
    chatBackground: 'linear-gradient(33deg, #a16bfe, #deb0df)',
    currentMessageBackground: '#eeffde',
    selectedChat: '#a16bfe',
    scroll: '#c4c9cc',
    optionsBackground: 'rgba(255, 255, 255, 0.25)',
    optionsShadow: 'rgba(114, 114, 114, 0.25)'
  }
}

export const ThemeDark: Theme = {
  ...ThemeLight,
  colors: {
    primary: '#7209b7',
    heading: '#e3e3e3',
    greyText: '#e2e2e2',
    lightGrey: '#cfcfcf',
    border: '#3f3f3f',
    chatHover: '#f4f4f5',
    secondaryText: '#707579',
    danger: '#d81818'
  },
  boxColors: {
    primaryBackground: '#212121',
    secondaryBackground: '#2c2c2c',
    chatBackground: '#030303',
    currentMessageBackground: '#a16bfe',
    selectedChat: '#a16bfe',
    scroll: '#c4c9cc',
    optionsBackground: 'rgba(33, 33, 33, 0.25)',
    optionsShadow: 'rgba(16, 16, 16, 0.6)'
  }
} as const
