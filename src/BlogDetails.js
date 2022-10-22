import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();                                  // get the id parameter we passed it in the parent element as -> :id
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);    // use the id to access the blog data
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(()=> {
      navigate('/');                      // go to the home page path
    })
  }
  return ( 
    <div className="blog-details">
      { isPending && <div>Loading....</div> }
      { error && <div> { error } </div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      ) }
    </div>
   );
}
 
export default BlogDetails;