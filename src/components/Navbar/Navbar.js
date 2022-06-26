import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <span>Logo</span> &nbsp;
      <Link to='/'>Home</Link> &nbsp;
      <Link to='/categories'>Categories</Link> &nbsp;
      <Link to='promotions'>Promotions</Link> &nbsp;
      <span>Search</span> &nbsp;
      <span>Cart</span> &nbsp;
      <span>Sign in/up or Profile</span> &nbsp;
      <span>Lang/Theme</span>
    </div>
  )
}

export default Navbar