// src/components/VerifyOTP.js
import React, { useState } from 'react';
import api from '../api';

const VerifyOTP = () => {
   const [otp, setOtp] = useState('');
   const [message, setMessage] = useState('');

   const handleVerify = async () => {
       try {
           const response = await api.post('/verify-otp', { otp });
           setMessage(response.data.message);
       } catch (error) {
           setMessage(error.response.data.message || 'OTP verification failed');
       }
   };

   return (
       <div>
           <h2>Verify OTP</h2>
           <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
           <button onClick={handleVerify}>Verify OTP</button>
           <p>{message}</p>
       </div>
   );
};

export default VerifyOTP;

