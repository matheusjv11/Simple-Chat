import { render, screen } from '@testing-library/react'

import ChatHeader from '.'

describe('<ChatHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChatHeader />)

    expect(
      screen.getByRole('heading', { name: /ChatHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})