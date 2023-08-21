import { render, screen } from '@testing-library/react'

import GroupChatHeader from '.'

describe('<GroupChatHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<GroupChatHeader />)

    expect(
      screen.getByRole('heading', { name: /GroupChatHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})