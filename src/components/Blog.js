import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => (
  <article>
    {blog.title} {blog.author}
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
