import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'

import DarkModeSwitch from '.'

describe('<DarkModeSwitch />', () => {
  it('should render the dark mode switch', () => {
    renderWithTheme(<DarkModeSwitch />)

    expect(
      screen.getByRole('main', { name: /DarkModeSwitch/i })
    ).toBeInTheDocument()
  })
})
