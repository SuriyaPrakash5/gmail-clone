import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './EmailList';
import Header from './Header';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'

function App() {


  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])



  return (
    <BrowserRouter>

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>

              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />

            </Routes>
          </div>
          {sendMessageIsOpen &&
            <SendMail />
          }
        </div>
      )
      }

    </BrowserRouter>
  );
}

export default App;