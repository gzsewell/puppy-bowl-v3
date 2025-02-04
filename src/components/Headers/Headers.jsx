import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <nav className="navbar">
      <Link to="/puppy_list">Puppy List</Link>
      <Link to="/add_puppy">Add Puppy</Link>
    </nav>
  );
}

export default Headers;
