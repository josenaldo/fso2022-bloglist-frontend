import React from 'react'

import loginService from 'services/login'
import blogService from 'services/blogs'

import BlogList from 'components/BlogList'
import LoginForm from 'components/LoginForm'

import './App.css'

const App = () => {
  const [blogs, setBlogs] = React.useState([])
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }

    fetchBlogs()
  }, [])

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      loginService.LOGGED_USER_KEY
    )

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const login = async ({ username, password }) => {
    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        loginService.LOGGED_USER_KEY,
        JSON.stringify(user)
      )

      setUser(user)
    } catch (exception) {
      setUser(null)
      console.log('wrong credentials', exception)
    }
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(loginService.LOGGED_USER_KEY)
  }

  return (
    <main className="container">
      {user === null ? (
        <div>
          <h1>Login</h1>
          <LoginForm login={login} logout={logout} />
        </div>
      ) : (
        <div>
          <h1>Blog</h1>
          <p>
            Welcome {user.name}!{' '}
            <a
              href="#"
              role="button"
              className="outline small"
              onClick={logout}
            >
              Logout
            </a>
          </p>
          <BlogList blogs={blogs} />
        </div>
      )}
    </main>
  )
}

export default App
