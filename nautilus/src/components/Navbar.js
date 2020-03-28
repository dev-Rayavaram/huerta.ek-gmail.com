import React from 'react';

function Navbar() {
    return (
    <div className="topbar">
        <div className="logo">
        </div>
        <div className="menu">
          Issues
        </div>
        <div className="menu">
          Topics
        </div>
        <div className="menu">
          Blog
        </div>
        <div className="menu">
          Newsletter
        </div>
        <div className="menu">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>  
        </div>
        <div className="menu menu-button">
          Subscribe
        </div>
      </div>

    );
};
    
export default Navbar;