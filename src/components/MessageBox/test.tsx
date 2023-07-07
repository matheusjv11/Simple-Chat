import { render, screen } from '@testing-library/react'

import MessageBox from '.'

describe('<MessageBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<MessageBox />)

    expect(
      screen.getByRole('heading', { name: /MessageBox/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})