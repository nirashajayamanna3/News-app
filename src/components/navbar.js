import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>News App</h2>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;