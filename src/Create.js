import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Create = () => {
  // to track the change in the inputs we use the useState hook 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();                         // to redirect the user we use the useNavigate hook
  const handleSubmit = (e) => {
    e.preventDefault();                   // to prevent the defualt action of reloading the page on submit
    const blog = { title, body, author };
    setIsPending(true);                   // when we start the request it's loading......
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',                     // post request to add the data
      headers: { "Content-Type": "application/json" },    // Indicates that the request body format is JSON.
      body: JSON.stringify(blog)                          // turning the blog to JSON format
    }).then(() => {
      setIsPending(false)                 // when the request is fullfilled it's not loading anymore 
      navigate('/');                      // go to the home page path
    })
  }

  return (
    <div className="create">
      <h2 className="text-info mb-2 text-opacity-50">Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <label className="d-block fs-4 mb-2">Blog title:</label>
        <input 
          className="d-block mx-auto mb-2 p-2"
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}        // onChange fires a callback to change the state of the input
        />
        <label className="d-block fs-4 mb-2">Blog body:</label>
        <textarea
          className="d-block mx-auto mb-2 p-2"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="d-block fs-4 mb-2">Blog Author</label>
        <input
          className="d-block mx-auto mb-5 p-2"
          required
          type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />
        { !isPending && <Button variant="primary" className="py-2 px-3" onClick={handleSubmit}>Add Blog</Button> }
        { isPending && <Spinner animation="border" variant="primary" />}
      </form>
    </div>
  );
}
 
export default Create;