import React, { useCallback } from 'react';
import { withRouter, Link } from "react-router-dom";
import config from '../firebase/config';

const Register = ({ history }) => {

 const handleSignUp = useCallback( async event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  try {
   await config
     .auth()
     .createUserWithEmailAndPassword(email.value, password.value);
   history.push("/");
  } catch(error) {
   alert(error);
  }
 }, [history])
 return (
  <div className="register">
     <h1>Sign Up</h1>
     <form onSubmit={handleSignUp}>
       <input type="email" name="email" placeholder="Email" />
       <input type="password" name="password" placeholder="Password" />
       <button type="submit">Sign up</button>
     </form>
     <Link className="linkPage" to="/login">Login page</Link>
  </div>
 );
};

export default Register;