import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import ProfileScreen from './components/ProfileScreen'
import { useDispatch,useSelector} from 'react-redux';
import {login,logout, selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      }
      else {
        dispatch(logout());
      }
    });
    return unSubscribe;
  })

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen /> ) :
          (
            <Switch>
              <Route exact path="/" ><HomeScreen /></Route>
               <Route exact path="/profile"><ProfileScreen /></Route>

            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
