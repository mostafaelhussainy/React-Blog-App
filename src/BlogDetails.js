import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

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
      { isPending && <Spinner animation="border" variant="primary" /> }
      { error && <div> { error } </div>}
      { blog && (
        <article className="my-5">
          <h2 className="text-info text-opacity-50 mb-3">{ blog.title }</h2>
          <p className="fs-4 text-opacity-50 mb-3">Written by: { blog.author }</p>
          <div className="mb-3">{ blog.body }</div>
          <Button variant="primary" className="py-2 px-3" onClick={handleDelete}>Delete</Button>
        </article>
      ) }
    </div>
   );
}
 
export default BlogDetails;