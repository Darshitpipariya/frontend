// import logo from './logo.svg';
import './App.css';
import Login from './login';
import Dashboard from './Dashboard';
import Notification from './Notification';
import NavBar from './NavBar' 
import { useState } from 'react';
import { useEffect } from 'react';

import loginService from './services/login'
import billService from './services/bill'
function App() {
  const [user, setUser] = useState(null)

  // Will store the bills of the logged in user
  const [bills, setBills] = useState([])

  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 30000)
  }

  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))

      notificationHandler(`Logged in successfully as ${userObject.fname}`, 'success')
      setBills([])
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const bills = await billService.getUserBills(user)
        setBills(bills)
      }
    }
    fetchData()
  }, [user])


  // Effect Hook that parses the local storage for 'loggedInUser' and sets the "user" state if a valid match is found
  // This enables user to login automatically without having to type in the credentials. Caching the login if you will.
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div className="App">
      <h1>Student Fees Receipt</h1>
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} type={notificationType} />
      {
        /* Show Login form when no login has happened */
        user === null &&
        <Login startLogin={handleLogin} />
      }
      {
        /* Show NavBar when login has happened */
        user !== null &&
        <NavBar user={user} setUser={setUser} />
      } 
      {
        /* Show Bills of the User when login has happened */
        user !== null &&
        <Dashboard
          bills={bills}
        />
      }
    </div>
  );
}

export default App;
