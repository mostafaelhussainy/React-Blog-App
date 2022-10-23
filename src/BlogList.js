import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="text-info mb-4">{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview mb-5 w-50 p-2" key={blog.id} >
          <Link to={`/blogs/${blog.id}`} className="text-decoration-none">            {/*make the blog clickable throw the link and link it to the path of the blog u link throw the id*/}
            <h3 className="text-info mb-2 text-opacity-50">{ blog.title }</h3>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;