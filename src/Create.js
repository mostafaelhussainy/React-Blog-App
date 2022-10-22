import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}        // onChange fires a callback to change the state of the input
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <input
          required
          type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding Blog ....</button> }
      </form>
    </div>
  );
}
 
export default Create;