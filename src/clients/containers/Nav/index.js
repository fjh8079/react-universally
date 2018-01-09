import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todos">todos</Link>
    </nav>
  </div>
);

export default Nav;
