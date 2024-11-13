// src/components/Signup.js
import React, { useState } from 'react';
import api from '../api';

const Signup = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

   const handleSignup = async () => {
       try {
           const response = await api.post('/signup', { email, password });
           setMessage(response.data.message);
       } catch (error) {
           setMessage(error.response.data.message || 'Signup failed');
       }
   };

   return (
       <div>
           <h2>Signup</h2>
           <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
           <button onClick={handleSignup}>Sign Up</button>
           <p>{message}</p>
       </div>
   );
};

export default Signup;
