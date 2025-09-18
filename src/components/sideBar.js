import { Link } from "react-router-dom";
import "../css/sideBar.css";
export const SideBar = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
