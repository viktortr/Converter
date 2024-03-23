
import React from 'react';
import Header from './Header';
import Converter from './Converter';
import Footer from './Footer';
import './App.css';

// import User from './UserPage';
import Account from './AccountPage';
import AboutUs from './AboutPage';
import ContactUs from './ContactPage';
import Contribute from './ContributePage';
import Settings from './SettingsPage';

import Registration from './RegistrationUser';
import Login from './LoginUser';
import ResetPassword from './ResetPassword';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';

import './styles.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



      // {/* <div id="flex-container" clasName="flex-item"> */}

      function App() {
        return (
          <Router>
            <div className="flex-container">
              < Header className="header" />
               
              <Routes>
                <Route path="/" element={<Converter className="converter"/>} />
                {/* <Route path="/UserPage" exact element={<User className="user"/>} /> */}

                <Route path="/RegistrationUser" element={<Registration className="registration"/>} />
                <Route path="/LoginUser" element={<Login className="login"/>} />
                <Route path="/Account" element={<Account className="account"/>} />
                <Route path="/ResetPassword" element={<ResetPassword className="resetpassword"/>}/>
                <Route path="/ChangePassword" element={<ChangePassword className="changepassword"/>}/>
                <Route path="/EditProfile" element={<EditProfile className="editprofile"/>}/>

                <Route path="/AboutPage" element={<AboutUs className="about"/>} />
                <Route path="/ContactPage" element={<ContactUs className="contact"/>} />
                <Route path="/ContributePage" element={<Contribute className="contribute"/>} />
                <Route path="/SettingsPage" element={<Settings className="settings"/>} />
              </Routes>
              <Footer className="footer"/>
            </div>
          </Router>
        );
      }
      
      export default App;



