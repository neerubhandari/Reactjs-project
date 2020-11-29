import React, { useState,useContext,useCallback } from 'react';
import './app.css';
import Unauthorize from './components/Unauthorize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [user, setUser] = useState(false)
  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }
 
  return (
    <div className="App">
       <Router>
        <Route exact path={"/"}  render={
          props => <Landing {...props} user={user.toString()}
            handleLogin={handleLogin} />}/>
            <ProtectedRoute exact path='/dashboard' user={user} handleLogout={handleLogout} component={Dashboard} />
        <Route exact path='/unauthorize' component={Unauthorize} />
      </Router>
    </div>
  );
}

export default App;