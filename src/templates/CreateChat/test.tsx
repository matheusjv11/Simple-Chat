import { render, screen } from '@testing-library/react'

import CreateChat from '.'

describe('<CreateChat />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateChat />)

    expect(
      screen.getByRole('heading', { name: /CreateChat/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})