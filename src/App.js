import React, { useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import PlaygroundPage from "./pages/playground/playground.component"

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from "./redux/user/user.actions";

import './App.scss';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // console.log(currentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='sign-in' element={
            currentUser ? (
              <Navigate replace to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          } 
        />
        <Route exact path='/playground' element={<PlaygroundPage />} />
      </Routes>
    </div>
  );
}

export default App;
