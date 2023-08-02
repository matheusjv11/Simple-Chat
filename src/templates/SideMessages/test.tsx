import { render, screen } from '@testing-library/react'

import SideMessages from '.'

describe('<SideMessages />', () => {
  it('should render the heading', () => {
    const { container } = render(<SideMessages />)

    expect(
      screen.getByRole('heading', { name: /SideMessages/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
