import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'

import TextButton from '.'

describe('<TextButton />', () => {
  it('should render TextButton with the right label', () => {
    renderWithTheme(<TextButton color="primary" label="Testing file" />)

    expect(screen.getByRole('button')).toHaveTextContent('Testing file')
  })

  it('should render TextButton with the right color', () => {
    renderWithTheme(<TextButton color="primary" label="Testing file" />)

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: '#7209b7'
    })
  })
})
