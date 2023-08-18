import { render, screen } from '@testing-library/react'

import SingleChatHeader from '.'

describe('<SingleChatHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleChatHeader />)

    expect(
      screen.getByRole('heading', { name: /SingleChatHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})