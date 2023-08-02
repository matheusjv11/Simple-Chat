import { render, screen } from '@testing-library/react'

import MainChat from '.'

describe('<MainChat />', () => {
  it('should render the heading', () => {
    const { container } = render(<MainChat />)

    expect(
      screen.getByRole('heading', { name: /MainChat/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})