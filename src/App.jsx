import { Link, Outlet } from "react-router-dom";
import './index.css'

export default function App() {
  return (
    <>
      <div className="nav" id="sidebar">
        {/* create a navigation bar here to the home page, compGuess and HumanGuess */}
        {/* use Links to connect to pages */}
        {/* https://reactrouter.com/en/main/components/link */}
      </div>
      <div id="detail">
        {/* info on Outlets: https://reactrouter.com/en/main/components/outlet */}
        <Outlet />
      </div>
    </>
  );
}