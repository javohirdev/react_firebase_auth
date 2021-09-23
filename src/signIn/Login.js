import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import config from '../firebase/config';
import { AuthContext } from '../Auth';

const Login = ({ history }) => {

 const handleSignIn = useCallback(
  async event => {
   event.preventDefault();
   const { email, password } = event.target.elements;
   try{
    await config
      .auth()
      .signInWithEmailAndPassword(email.value, password.value);
    history.push("/");
   } catch(error) {
    alert(error);
   }
  },
  [history]
 );

  const { currentUser } = useContext(AuthContext);

  if(currentUser) {
   return <Redirect to="/" />
  }

 return (
  <div className="login">
     <h1>Login</h1>
     <form onSubmit={handleSignIn}>
       <input type="email" name="email" placeholder="Email" />
       <input type="password" name="password" placeholder="Password" />
       <button type="submit">Login</button>
     </form>
     <Link className="linkPage" to="/register">Sign Up page</Link>
  </div>
 );
};

export default Login;