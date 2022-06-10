import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Myaccount from './Myaccount';

function Logout() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="login">
         <Myaccount />
        <button
          className="loginBtn"
          onClick={() => logout({ returnTo: window.location.origin })}
        > ВЫЙТИ
        </button>
      </div>
    )
  );
}

export default Logout;
