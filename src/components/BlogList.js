import React from 'react'
import PropTypes from 'prop-types'

import blogService from 'services/blogs'

import { ALERT_TYPE } from 'components/Alert'

import Blog from 'components/Blog'
import BlogForm from 'components/BlogForm'
import Togglable from './Togglable'

const BlogList = ({ message, setMessage }) => {
  const [blogs, setBlogs] = React.useState([])
  const blogFormRef = React.useRef()

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }

    fetchBlogs()
  }, [])

  const createBlog = async (blog) => {
    try {
      const newBlog = await blogService.create(blog)
      setBlogs(blogs.concat(newBlog))
      setMessage({
        type: ALERT_TYPE.SUCCESS,
        content: `A new blog addes: '${blog.title} '`,
      })
    } catch (exception) {
      setMessage({
        type: ALERT_TYPE.ERROR,
        content: 'Error creating blog. Please try again.',
        details: exception.message,
      })
    }
  }

  return (
    <div>
      <Togglable buttonLabel="New Blog" ref={blogFormRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>
      {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  )
}

BlogList.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.oneOf(Object.values(ALERT_TYPE)).isRequired,
    content: PropTypes.string.isRequired,
  }),
  setMessage: PropTypes.func.isRequired,
}

export default BlogList
