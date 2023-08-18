import { render, screen } from '@testing-library/react'

import ChatBody from '.'

describe('<ChatBody />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChatBody />)

    expect(
      screen.getByRole('heading', { name: /ChatBody/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})