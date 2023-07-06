import { render, screen } from '@testing-library/react'

import IconButton from '.'

describe('<IconButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<IconButton />)

    expect(
      screen.getByRole('heading', { name: /IconButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})