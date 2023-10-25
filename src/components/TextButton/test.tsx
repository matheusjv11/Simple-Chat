import { render, screen } from '@testing-library/react'

import TextButton from '.'

describe('<TextButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<TextButton />)

    expect(
      screen.getByRole('heading', { name: /TextButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})