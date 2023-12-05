import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'

import IconButton from '.'

describe('<IconButton />', () => {
  it('should render the icon button', () => {
    renderWithTheme(<IconButton icon="send" description="Send button" />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
