import { render, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'

import GroupPicture from '.'

describe('<GroupPicture />', () => {
  it('should render the group picture', () => {
    renderWithTheme(<GroupPicture />)

    expect(
      screen.getByRole('main', { name: /GroupPicture/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
