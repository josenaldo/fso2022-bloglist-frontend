import React from 'react'
import PropTypes from 'prop-types'
import './Blog.css'

const Blog = ({ blog, like, remove, user }) => {
  const [detailsVisible, setDetailsVisible] = React.useState(false)
  const buttonLabel = detailsVisible ? 'Hide' : 'View'
  const buttonStyle = detailsVisible ? 'secondary' : 'primary'
  const [loading, setLoading] = React.useState(false)

  const isBlogOwner = blog.user.username === user.username

  const handleLike = async () => {
    setLoading(true)

    await like(blog)

    setLoading(false)
  }

  return (
    <article className="blog">
      <div className="header">
        <div>
          <h2 className="title">{blog.title}</h2>
          <div className="author">{blog.author}</div>
        </div>
        <div>
          <div className="action-bar ">
            {detailsVisible && isBlogOwner && (
              <button
                className="remove-button inline small danger"
                onClick={remove}
              >
                Remove
              </button>
            )}

            {detailsVisible && (
              <button className="like-button inline small" onClick={handleLike}>
                Like
              </button>
            )}

            <button
              className={`view-button inline small ${buttonStyle}`}
              onClick={() => {
                setDetailsVisible(!detailsVisible)
              }}
            >
              {buttonLabel}
            </button>
          </div>
          <div className="progress-bar">{loading && <progress></progress>}</div>
        </div>
      </div>

      {detailsVisible && (
        <footer className="content">
          <div>
            URL:{' '}
            <a
              className="url"
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {blog.url}
            </a>
          </div>
          <div className="likes">
            Likes: {blog.likes}{' '}
            {loading && <span className="loading" aria-busy={loading}></span>}
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
  remove: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default Blog
