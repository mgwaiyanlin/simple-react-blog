import BlogsList from "./BlogsList";
import useFetchBlog from "./useFetchBlog";

function HomeBlog() {
  const {blogs, isPending, error, handleToDeleteBlog} = useFetchBlog('http://localhost:8000/blogs')

  return (
    <>
      <div className="mt-10">
        <p className="text-center">{ isPending && "Loading..."}</p>
        {blogs && <BlogsList blogs={blogs} handleToDeleteBlog={handleToDeleteBlog} />}
      </div>
    </>
  )
}

export default HomeBlog;

