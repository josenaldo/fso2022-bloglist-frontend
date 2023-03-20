import React from 'react'
import PropTypes from 'prop-types'
import Togglable from './Togglable'
// import Togglable from './Togglable'

const LoginForm = ({ login }) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    login({ username, password })
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <Togglable buttonLabel="Login">
        <form onSubmit={handleLogin}>
          <div className="grid">
            <label>
              Username
              <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </Togglable>
    </div>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginForm
