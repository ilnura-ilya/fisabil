import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Myaccount = () => {

   const { user, isAuthenticated } = useAuth0();
   return (
      isAuthenticated && (
      <div>
         <h4 style={{textAlign: "center"}}>Мой аккаунт</h4>
         <div className='accountInfo'>
         <img className='accountPict' src={user.picture} alt="" />
         <small>Имя: <span>{user.nickname}</span></small>
         <small>Email: <span>{user.email}</span></small>
         </div>
         
      </div>
   )
   )
}

export default Myaccount;