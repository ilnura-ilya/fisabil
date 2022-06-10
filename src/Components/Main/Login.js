import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div className="login">
          <button className='loginBtn' onClick={() => loginWithRedirect()}>ВОЙТИ</button>
        </div>
      )}

      {isAuthenticated && <Logout />}
    </div>
  );
}

export default Login;
