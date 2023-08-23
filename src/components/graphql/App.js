// App.js or whichever is your main file
import React from 'react';
import EmailLoginButton from './EmailLoginButton'; // or wherever your component is located
import { AuthProvider } from './AuthContext'; // adjust the path as necessary
import PhoneLoginButton from './PhoneLoginButton';

function App() {
    return (
        <AuthProvider>
            <EmailLoginButton />
            <PhoneLoginButton />
        </AuthProvider>
    );
}

export default App;
