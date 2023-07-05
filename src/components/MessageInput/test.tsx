import { render, screen } from '@testing-library/react'

import MessageInput from '.'

describe('<MessageInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<MessageInput />)

    expect(
      screen.getByRole('heading', { name: /MessageInput/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})