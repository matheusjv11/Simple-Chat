import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'

import MessageInput from '.'

describe('<MessageInput />', () => {
  it('should render the message input', () => {
    renderWithTheme(<MessageInput />)

    expect(
      screen.getByRole('form', { name: /MessageInput/i })
    ).toBeInTheDocument()
  })
})
