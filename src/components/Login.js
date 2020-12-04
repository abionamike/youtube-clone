import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { clientId } from '../api/clientId';

const Login = () => {
    const scopes = ['https://www.googleapis.com/auth/youtube.readonly'];
    const onSuccess = (res) => {
        console.log('[login sucess] currentUser:', res);
        localStorage.setItem('user', JSON.stringify(res));
        refreshTokenSetup(res);
    }

    const onFailure = (res) => {
        console.log('[login failed] res:', res)
    }
    // render={renderProps => (
    //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    // )}
    return (
        <GoogleLogin 
            clientId={clientId} 
            buttonText="Login" 
            onSuccess={onSuccess} 
            onFailure={onFailure} 
            cookiePolicy={'single_host_origin'} 
            isSignedIn={true} 
        />
    )
}

export default Login
