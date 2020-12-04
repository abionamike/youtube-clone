import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';

const  App = () => {

  
  return (
    <Router>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/signin">
        <SignInPage /> 
      </Route>
    </Router>
  );
}

export default App;
