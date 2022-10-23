import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar my-5 border-bottom border-primary border-opacity-50 border-3">
      <Link to="/" className="text-decoration-none"><h1 className="text-primary">Blog App</h1></Link>
      <div className="links">
        <Link to="/" className="text-primary me-3 text-decoration-none fs-4">Home</Link>
        <Link to="/create" className="text-primary text-decoration-none fs-4">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;