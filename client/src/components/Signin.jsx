

// src/components/Signin.js
import React, { useState } from 'react';
import api from '../api';

const Signin = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

   const handleSignin = async () => {
       try {
           const response = await api.post('/signin', { email, password });
           setMessage(response.data.message);
           localStorage.setItem('jwtToken', response.data.jwtToken);
       } catch (error) {
           setMessage(error.response.data.message || 'Signin failed');
       }
   };

   return (
       <div>
           <h2>Signin</h2>
           <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
           <button onClick={handleSignin}>Sign In</button>
           <p>{message}</p>
       </div>
   );
};

export default Signin;
