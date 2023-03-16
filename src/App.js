import React from 'react'

import loginService from 'services/login'
import blogService from 'services/blogs'

import BlogList from 'components/BlogList'
import LoginForm from 'components/LoginForm'
import Alert from 'components/Alert'
import { ALERT_TYPE } from 'components/Alert'

import './App.css'

const App = () => {
  const [user, setUser] = React.useState(null)
  const [message, setMessage] = React.useState()

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
      setMessage({
        type: ALERT_TYPE.ERROR,
        content: 'Incorrect username or password. Please try again.',
      })
    }
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(loginService.LOGGED_USER_KEY)
  }

  return (
    <main className="container">
      <Alert message={message} setMessage={setMessage} />
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
          <BlogList message={message} setMessage={setMessage} />
        </div>
      )}
    </main>
  )
}

export default App
