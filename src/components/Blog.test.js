import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
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
})
