import React from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';


const SignInPage = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
            <Login />
            <Logout />
        </div>
    )
}

export default SignInPage;
