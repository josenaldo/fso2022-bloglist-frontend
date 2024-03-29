import React from 'react'
import PropTypes from 'prop-types'

/**
 * A reusable component for toggling the visibility of child components
 *
 * @component
 * @param {Object} props - The props object
 * @param {string} props.buttonLabel - The label for the toggle button
 * @param {React.ReactNode} props.children - The child components to be toggled
 * @return {JSX.Element} - The rendered component
 */
const Togglable = React.forwardRef((props, refs) => {
  const [visible, setVisible] = React.useState(false)

  React.useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    }
  })

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  if (!visible) {
    return (
      <article>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </article>
    )
  }

  return (
    <article>
      <div>
        {props.children}
        <button className="cancel-button secondary" onClick={toggleVisibility}>
          Cancel
        </button>
      </div>
    </article>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Togglable
