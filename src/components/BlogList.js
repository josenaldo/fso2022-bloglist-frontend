import React from 'react'
import Blog from 'components/Blog'

import BlogForm from 'components/BlogForm'
import blogService from 'services/blogs'

const BlogList = () => {
  const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }

    fetchBlogs()
  }, [])

  const createBlog = async (blog) => {
    const newBlog = await blogService.create(blog)
    setBlogs(blogs.concat(newBlog))
  }

  return (
    <div>
      <BlogForm createBlog={createBlog} />

      {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  )
}

export default BlogList
