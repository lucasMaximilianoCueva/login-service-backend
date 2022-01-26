import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Navbar = () => {

  const [ loged, setLoged ] = useState(false);  


  return (
    
    <div className="navbar__navbar_main">
      <div>
        <h1>Navbar</h1>
      </div>

      {
        (loged) ? (
          <nav className="navbar__navbar_log">
            <div>
              <span>
                Nombre
              </span>
              <span>
                <Link to="/api/logout">Logout</Link>
              </span>
            </div>
          </nav>

        ) : (

          <nav className="navbar__navbar_log">
            <div>
              <span>
                <Link to="/api/login">Login</Link>
              </span>
              <span>
                <Link to="/api/register">Register</Link>
              </span>
            </div>
          </nav>

        )
      }
      
      <Outlet/>
    </div>
  
  );
};
