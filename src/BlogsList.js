
function BlogsList({blogs, handleToDeleteBlog}) {
    return (
        <>
            {blogs.map((blog) => (
                <div className="mb-2 p-5 border-b-2 rounded hover:bg-gray-100" key={blog.id}>
                    <h4 className="font-medium text-orange-600">{blog.title}</h4>
                    <p>{blog.body}</p>
                    <div className="flex justify-end">
                        <button onClick={() => handleToDeleteBlog(blog.id)} className="bg-red-800 text-white px-1 rounded text-sm">Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogsList;
