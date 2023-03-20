import React from 'react'
import PropTypes from 'prop-types'

const UserAppbar = ({ user, logout }) => {
  return (
    <div>
      Welcome {user.name}!{' '}
      <a href="#" role="button" className="outline small" onClick={logout}>
        Logout
      </a>
    </div>
  )
}

UserAppbar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default UserAppbar
