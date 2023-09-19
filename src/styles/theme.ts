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
  }
  boxColors: {
    primaryBackground: string
    secondaryBackground: string
    chatBackground: string
    secondaryLight: string
    selectedChat: string
    scroll: string
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
    greyText: '#919093',
    lightGrey: '#cfcfcf',
    border: '#ebebeb',
    chatHover: '#f4f4f5',
    secondaryText: '#707579'
  },
  boxColors: {
    primaryBackground: 'white',
    secondaryBackground: '#f0f2f5',
    chatBackground: 'linear-gradient(33deg, #a16bfe, #deb0df)',
    secondaryLight: '#eeffde',
    selectedChat: '#a16bfe',
    scroll: '#c4c9cc'
  }
}

export const ThemeDark: Theme = {
  ...ThemeLight,
  colors: {
    primary: '#7209b7',
    heading: '#e3e3e3',
    greyText: '#919093',
    lightGrey: '#cfcfcf',
    border: '#3f3f3f',
    chatHover: '#f4f4f5',
    secondaryText: '#707579'
  },
  boxColors: {
    primaryBackground: '#212121',
    secondaryBackground: '#2c2c2c',
    chatBackground: '#030303',
    secondaryLight: '#eeffde',
    selectedChat: '#a16bfe',
    scroll: '#c4c9cc'
  }
} as const
