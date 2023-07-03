import { render, screen } from '@testing-library/react'

import GroupPicture from '.'

describe('<GroupPicture />', () => {
  it('should render the heading', () => {
    const { container } = render(<GroupPicture />)

    expect(
      screen.getByRole('heading', { name: /GroupPicture/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})