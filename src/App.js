import React from 'react'

import loginService from 'services/login'
import blogService from 'services/blogs'

import BlogList from 'components/BlogList'
import LoginForm from 'components/LoginForm'

import './App.css'

const App = () => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      loginService.LOGGED_USER_KEY
    )

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    } else {
      setUser(null)
      blogService.setToken(null)
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
      blogService.setToken(user.token)
    } catch (exception) {
      setUser(null)
      blogService.setToken(null)
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
          <BlogList />
        </div>
      )}
    </main>
  )
}

export default App
