
import React from 'react'
import GoogleLoginComponent from '../components/GoogleLoginComponent';



const GoogleLogin = () => {
    const handleLoginSuccess = () => {
        // Redirect or show a success message after login
        console.log('Google login successful!');
    };



  return (
    <div>
       
            <h1>Google Login</h1>
            <GoogleLoginComponent onLoginSuccess={handleLoginSuccess} />
        </div>
      
    
  )
}

export default GoogleLogin

