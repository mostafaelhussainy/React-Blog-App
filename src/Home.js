import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id); // filter out based on the id you want to delete it 
  //   setBlogs(newBlogs);                                    // update the state of the blogs with the new filtered array 
  // }
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending && <Spinner animation="border" variant="primary" />}                  {/* conditional loading message */} 
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}  {/* because we can't render null at the beginning */}
    </div>
  );
}
 
export default Home;
