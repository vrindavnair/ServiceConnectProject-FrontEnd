// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import VerifyOTP from './components/VerifyOTP';
import Signin from './components/Signin';

import GoogleLogin from './pages/GoogleLogin';

function App() {
   return (
       <Router>
           <div>
               <h1>Auth App</h1>
               <Routes>
                   <Route path="/signup" element={<Signup />} />
                   <Route path="/verify-otp" element={<VerifyOTP />} />
                   <Route path="/signin" element={<Signin />} />
                   <Route path="/google-login" element={<GoogleLogin />} />
               </Routes>
           </div>
       </Router>
   );
}

export default App;
