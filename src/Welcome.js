import React from 'react';
import config from './firebase/config';

const Welcome = () => {
 return (
  <>
   <h1>Welcome page</h1>
   <button onClick={() => config.auth().signOut()}>Sign out</button>
  </>
 );
};

export default Welcome;