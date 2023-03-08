import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Project Notes</h1>
      <nav>
      <NavLink to="/">
    Editor</NavLink>
<br/>
    <NavLink to="/notes/12">
    Notes</NavLink>
      </nav>
    </header>
  );
}
export default Header;