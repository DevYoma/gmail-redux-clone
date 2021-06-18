import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login'
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Components/SendMail'
import ErrorPage from './Components/Error/ErrorPage';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase/Firebase';


function App() {
  // fetching sendMessageisOpen variable from the mailSlice.js
  // so we using the useSelector hook and we're using a selector from the mailSlice.js... wicked🚀
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        // user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
      else{
        // user is logged out
      }
    })
  }, [])

  return (
    
    <Router>

      {!user ? (
        <Login />
      ) : (

        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route exact path="/">
                <EmailList />
              </Route>
              <Route path="/mail">  
                <Mail />
              </Route>
              <Route path="*" component={ErrorPage}>
                <h3>OOps, this page does not exist</h3>
              </Route>
            </Switch>


          </div>
            {sendMessageIsOpen &&  (<SendMail />) }
        </div>
      )}

    </Router>
  );
}

export default App;
