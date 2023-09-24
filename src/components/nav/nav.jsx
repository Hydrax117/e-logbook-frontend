import "./nav.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
export const NavBar = ({ cookie }) => {
  const isLoggedin = window.localStorage.getItem("isLoggin");

  return (
    <div className="Nav">
      <div className="title">
        <p>Student E-log book</p>
      </div>
      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {cookie.token && cookie.id ? (
          <>
            <li>
              <NavLink to="/login">Dashboard</NavLink>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
