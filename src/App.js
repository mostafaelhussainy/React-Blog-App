import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/create" element = {<Create />}/>
            <Route path="/blogs/:id" element = {<BlogDetails />}/>              {/* make the path changable by the (:id) */}
            <Route path="*" element = {<NotFound />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
