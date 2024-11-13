import React, { useEffect } from 'react';
import axios from 'axios';

const GoogleLoginComponent = ({ onLoginSuccess }) => {
    useEffect(() => {
        /* Initialize Google Identity Services */
        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Correct way to access Google Client ID
            callback: handleCredentialResponse,
        });

        /* Render the Google Sign-In button */
        window.google.accounts.id.renderButton(
            document.getElementById("google-signin-button"),
            { theme: "outline", size: "large" }
        );
    }, []);

    const handleCredentialResponse = async (response) => {
        try {
            const { credential } = response;

            // Send the credential (JWT token) to your backend
            const backendResponse = await axios.post('http://localhost:5000/auth/google-login', {
                token: credential,
            });

            if (backendResponse.status === 200) {
                const { jwtToken } = backendResponse.data;
                localStorage.setItem('jwtToken', jwtToken);
                onLoginSuccess(); // Callback function to handle successful login
            }
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    return <div id="google-signin-button"></div>;
};

export default GoogleLoginComponent;
