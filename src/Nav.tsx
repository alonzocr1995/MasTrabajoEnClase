import React from "react";
import { Link } from "react-router-dom";

const Navigation = [
  { path: "/", label: "Home" },
  {
    path: "/about",
    label: "about",
  },
  { path: "/contact", label: "contact me" },
];

const Nav: React.FC = () => {
  return (
    <div>
      <ul>
        {Navigation.map((item, i) => (
          <li key={i}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
