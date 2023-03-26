import React from 'react'

import loginService from 'services/login'
import blogService from 'services/blogs'

import BlogList from 'components/BlogList'
import LoginForm from 'components/LoginForm'
import UserAppbar from 'components/UserAppbar'
import Alert from 'components/Alert'
import { ALERT_TYPE } from 'components/Alert'
import { LOGGED_USER_KEY } from 'config'

import './App.css'

const App = () => {
  const [user, setUser] = React.useState(null)
  const [message, setMessage] = React.useState()

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(LOGGED_USER_KEY)

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

      window.localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user))

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
    window.localStorage.removeItem(LOGGED_USER_KEY)
  }

  return (
    <main className="container">
      <h1>Blog list</h1>

      <Alert message={message} setMessage={setMessage} />

      {user === null ? (
        <LoginForm login={login} />
      ) : (
        <div>
          <UserAppbar user={user} logout={logout} />
          <BlogList setMessage={setMessage} user={user} />
        </div>
      )}
    </main>
  )
}

export default App
