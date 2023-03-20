import React from 'react'
import PropTypes from 'prop-types'

import blogService from 'services/blogs'

import { ALERT_TYPE } from 'components/Alert'

import Blog from 'components/Blog'
import BlogForm from 'components/BlogForm'
import Togglable from './Togglable'

const BlogList = ({ setMessage }) => {
  const [blogs, setBlogs] = React.useState([])
  const blogFormRef = React.useRef()
  const [loadingLike, setLoadingLike] = React.useState(false)

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

  const like = async (blog) => {
    try {
      setLoadingLike(true)
      const likedBlog = await blogService.like(blog)
      console.log('likedBlog', likedBlog)
      const updatedBlogs = blogs.map((b) => {
        return b.id === blog.id ? likedBlog : b
      })

      console.log('updatedBlogs', updatedBlogs)
      setBlogs(updatedBlogs)
      setLoadingLike(false)
    } catch (exception) {
      setMessage({
        type: ALERT_TYPE.ERROR,
        content: 'Error liking blog. Please try again.',
        details: exception.message,
      })
      setLoadingLike(false)
    }
  }

  return (
    <div>
      <Togglable buttonLabel="New Blog" ref={blogFormRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>
      {blogs &&
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            like={() => {
              like(blog)
            }}
            loadingLike={loadingLike}
          />
        ))}
    </div>
  )
}

BlogList.propTypes = {
  setMessage: PropTypes.func.isRequired,
}

export default BlogList
