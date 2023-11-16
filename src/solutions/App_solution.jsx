import { Link, Outlet } from "react-router-dom";
import './index.css'

export default function App() {
  return (
    <>
      <div className="nav" id="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/compguess">Computer Guessing Game</Link>
                </li>
                <li>
                    <Link to="/humanguess">Human Guessing Game</Link>
                </li>
            </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}