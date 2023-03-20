import React from 'react'
import PropTypes from 'prop-types'
import './Blog.css'

const Blog = ({ blog, like, loadingLike }) => {
  const [detailsVisible, setDetailsVisible] = React.useState(false)
  const buttonLabel = detailsVisible ? 'Hide' : 'View'
  const buttonStyle = detailsVisible ? 'secondary' : 'primary'

  return (
    <article>
      <div className="header">
        <h2 className="title">{blog.title}</h2>
        <div>
          <div className="action-bar ">
            {detailsVisible && (
              <button className="inline small danger">Remove</button>
            )}

            {detailsVisible && (
              <button className="inline small" onClick={like}>
                Like
              </button>
            )}

            <button
              className={`inline small ${buttonStyle}`}
              onClick={() => {
                setDetailsVisible(!detailsVisible)
              }}
            >
              {buttonLabel}
            </button>
          </div>
          <div className="progress-bar">
            {loadingLike && <progress></progress>}
          </div>
        </div>
      </div>

      {detailsVisible && (
        <footer className="content">
          <div>Author: {blog.author}</div>
          <div>
            URL:{' '}
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.url}
            </a>
          </div>
          <div className="likes">
            Likes: {blog.likes}{' '}
            {loadingLike && (
              <span className="loading" aria-busy={loadingLike}></span>
            )}
          </div>
          <div>Added by: {blog.user.name}</div>
        </footer>
      )}
    </article>
  )
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  like: PropTypes.func.isRequired,
  loadingLike: PropTypes.bool.isRequired,
}

export default Blog
