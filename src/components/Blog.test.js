import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

const testUser = {
  id: '5f9b9b9b9b9b9b9b9b9b9b9b',
  name: 'Test User',
  username: 'testuser',
}

const testBlog = [
  {
    title: 'Programação Orientada a Gambiarra',
    author: 'Josenaldo Matos',
    url: 'https://livropog.com.br',
    likes: 10,
    user: {
      id: '5f9b9b9b9b9b9b9b9b9b9b9b',
      name: 'Test User',
      username: 'testuser',
    },
  },
]

describe('Blog', () => {
  test('renders blog', () => {
    const { container } = render(<Blog blog={testBlog[0]} user={testUser} />)

    const blogDiv = container.querySelector('.blog')
    expect(blogDiv).toBeInTheDocument()
  })

  test('renders only blog title and author', () => {
    const { container } = render(<Blog blog={testBlog[0]} user={testUser} />)

    const titleDiv = container.querySelector('.title')
    const authorDiv = container.querySelector('.author')
    const urlDiv = container.querySelector('.url')
    const likesDiv = container.querySelector('.likes')

    expect(titleDiv).toHaveTextContent('Programação Orientada a Gambiarra')
    expect(authorDiv).toHaveTextContent('Josenaldo Matos')
    expect(urlDiv).not.toBeInTheDocument()
    expect(likesDiv).not.toBeInTheDocument()
  })

  test('renders blog title, author, url and likes when view button is clicked', async () => {
    const { container } = render(<Blog blog={testBlog[0]} user={testUser} />)

    const button = container.querySelector('.view-button')
    const user = userEvent.setup()
    await user.click(button)

    const titleDiv = container.querySelector('.title')
    const authorDiv = container.querySelector('.author')
    const urlDiv = container.querySelector('.url')
    const likesDiv = container.querySelector('.likes')

    expect(titleDiv).toHaveTextContent('Programação Orientada a Gambiarra')
    expect(authorDiv).toHaveTextContent('Josenaldo Matos')
    expect(urlDiv).toHaveTextContent('https://livropog.com.br')
    expect(likesDiv).toHaveTextContent('Likes: 10')
  })

  test('renders like button and remove button when view button is clicked', async () => {
    const { container } = render(<Blog blog={testBlog[0]} user={testUser} />)

    const button = container.querySelector('.view-button')
    const user = userEvent.setup()
    await user.click(button)

    const likeButton = container.querySelector('.like-button')
    const removeButton = container.querySelector('.remove-button')

    expect(likeButton).toBeInTheDocument()
    expect(removeButton).toBeInTheDocument()
  })

  test('call like twice when like button is clicked twice', async () => {
    const mockHandler = jest.fn()

    const { container } = render(
      <Blog blog={testBlog[0]} user={testUser} like={mockHandler} />
    )

    const button = container.querySelector('.view-button')
    const user = userEvent.setup()
    await user.click(button)

    const likeButton = container.querySelector('.like-button')
    await user.click(likeButton)
    await user.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)
  })

  test('call when remove button is clicked', async () => {
    const mockHandler = jest.fn()

    const { container } = render(
      <Blog blog={testBlog[0]} user={testUser} remove={mockHandler} />
    )

    const button = container.querySelector('.view-button')
    const user = userEvent.setup()
    await user.click(button)

    const removeButton = container.querySelector('.remove-button')
    await user.click(removeButton)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
