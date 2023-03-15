import React from 'react'
import { useState, useEffect } from 'react'
import blogService from 'services/blogs'
import BlogList from 'components/BlogList'
import LoginForm from 'components/LoginForm'
import './App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }

    fetchBlogs()
  }, [])

  return (
    <main className="container">
      {user === null ? (
        <div>
          <h1>Login</h1>
          <LoginForm setUser={setUser} />
        </div>
      ) : (
        <div>
          <h1>Blog</h1>
          <p>{user.name} is logged in</p>
          <BlogList blogs={blogs} />
        </div>
      )}
    </main>
  )
}

export default App
