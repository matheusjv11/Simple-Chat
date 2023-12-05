import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import { ThemeLight } from '../styles/theme'

import React from 'react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={ThemeLight}>{children}</ThemeProvider>)
