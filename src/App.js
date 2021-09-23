import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './Welcome';
import Login from './signIn/Login';
import Register from './signUp/Register';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import './style.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;