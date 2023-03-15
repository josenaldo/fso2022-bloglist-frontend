import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => (
  <article>
    <div className="headings">
      <h2>{blog.title}</h2>
      <h3>{blog.author}</h3>
    </div>
    <div className="content">
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        {blog.url}
      </a>
    </div>
  </article>
)

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Blog
