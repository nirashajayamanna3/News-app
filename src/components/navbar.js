import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand">📰 News App</span>

        <div>
          <Link className="btn btn-outline-light" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;