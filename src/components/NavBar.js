// imports
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="About"> About</Link>
        </li>
        <li>
          <Link to="Projects"> Projects</Link>
        </li>
        <li>
          <Link to="Contact"> Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
