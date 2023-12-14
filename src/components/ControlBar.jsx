import { Link } from "react-router-dom";
export default function ControlBar() {
  return (
    <div id="control-bar">
      <input className="search-bar" placeholder="Search Recipe..." />
      <Link to="recipes/new">
        <button>+</button>
      </Link>
    </div>
  );
}
