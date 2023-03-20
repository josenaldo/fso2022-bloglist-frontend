import React from 'react'
import PropTypes from 'prop-types'
import './Alert.css'

const ALERT_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
}

const Alert = ({ message, setMessage }) => {
  const timeoutRef = React.useRef()

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setMessage(null)
    }, 5000)

    return () => clearTimeout(timeoutRef.current)
  }, [message])

  const closeAlert = () => {
    setMessage(null)
  }

  if (!message) {
    return null
  }

  return (
    <div className={`alert alert-${message.type}`}>
      <span className="close-btn" onClick={closeAlert}>
        &times;
      </span>
      <p>{message.content}</p>
      {message.details && <p className="details">{message.details}</p>}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.oneOf(Object.values(ALERT_TYPE)).isRequired,
    content: PropTypes.string.isRequired,
    details: PropTypes.string,
  }),
  setMessage: PropTypes.func.isRequired,
}

export { ALERT_TYPE }
export default Alert
