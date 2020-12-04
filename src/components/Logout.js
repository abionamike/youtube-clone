import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../api/clientId';

const Logout = () => {
    const onSuccess = () => {
        localStorage.removeItem('user');
        alert('Logout made successfully');
    }
    return (
        <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
    )
}

export default Logout;
