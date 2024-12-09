import { useEffect, useState } from "react";

// This is custom useHooks
const useFetchBlog = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok) {
              throw Error('we could not fetch the data for that resource!')
            }
            return res.json()
          })
          .then(data => {
            setBlogs(data)
            setPending(false)
          })
          .catch((e) => {
            setPending(false)
            setError(e.message)
          })
      }, []);

      const handleToDeleteBlog = (id) => {
        const newTempBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newTempBlogs)
      }
    
    return {blogs, isPending, error, handleToDeleteBlog}
}

export default useFetchBlog;
