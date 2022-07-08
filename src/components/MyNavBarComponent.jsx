import { Link } from "react-router-dom";

export function MyNavBarComponent() {
  return (
    /* 👇myNavbar (hacerlo componente) */
    <div className="myNabvar--pendingStyle">
      <nav>
        <ul>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li>
            <Link to="*">error_404</Link>
          </li>
          <li>
            <Link to="contactUs">contact Us</Link>
          </li>
          <li>
            <Link to="/tp4-react">tp4-react</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
