import { Link } from "gatsby";
import React from "react";

import Footer from '../components/footer'

const layout = ({ children }) => {
  return (
    <div className="page-container">
      <header className="navbar">
        <Link to={"/"}>
          <img
            className="logo"
            src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png"
            alt=""
          />
        </Link>
      </header>
      {children}
      <Footer/>
    </div>
  );
};

export default layout;