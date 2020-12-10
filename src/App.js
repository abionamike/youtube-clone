/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { clientId } from './api/clientId';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import TabPanelScroll from './components/TabPanelScroll';

const App = () => {
  const [searchInput, setSearchInput] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const onSuccess = (res) => {
    localStorage.setItem('user', JSON.stringify(res));
  }

  const onFailure = (res) => {
      console.log(res)
  }

  const autoLoad = () => {
      if(user){
          return false;
      }
      return true
  }

  const { signIn } = useGoogleLogin({
      clientId,
      cookiePolicy: 'single_host_origin', 
      isSignedIn: true, 
      autoLoad,
      onSuccess,
      onFailure,
  });

  useEffect(() => {
      signIn();
      console.log(user);
  }, [user]);

  return (
      <>
          <NavBar setSearchInput={setSearchInput} />
          <div style={{ display: 'flex', marginTop: '10vh' }}>
              <SideBar />
              <TabPanelScroll searchInput={searchInput} />
          </div>   
      </>
  )
}

export default App;

