import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

describe('BlogForm', () => {
  test('calls the event handler it received as props with the right details when a new blog is created', async () => {
    const createMock = jest.fn()
    const user = userEvent.setup()

    const { container } = render(<BlogForm createBlog={createMock} />)

    const titleInput = container.querySelector('input[name="Title"]')
    const authorInput = container.querySelector('input[name="Author"]')
    const urlInput = container.querySelector('input[name="Url"]')
    const createButton = container.querySelector('button[type="submit"]')

    await user.type(titleInput, 'Programação Orientada a Gambiarra')
    await user.type(authorInput, 'Josenaldo Matos')
    await user.type(urlInput, 'https://livropog.com.br')

    await user.click(createButton)

    expect(createMock.mock.calls).toHaveLength(1)
    expect(createMock.mock.calls[0][0].title).toBe(
      'Programação Orientada a Gambiarra'
    )
    expect(createMock.mock.calls[0][0].author).toBe('Josenaldo Matos')
    expect(createMock.mock.calls[0][0].url).toBe('https://livropog.com.br')
  })
})
