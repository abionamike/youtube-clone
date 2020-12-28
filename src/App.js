/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useGoogleLogin } from 'react-google-login';
// import { clientId } from './api/clientId';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import TabPanelScroll from './components/TabPanelScroll';

const App = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [displaySidebar, setDisplaySidebar] = useState('block');
  const [littleSidebar, setLittleSidebar] = useState('none');

//   const user = JSON.parse(localStorage.getItem('user'));

//   const onSuccess = (res) => {
//     localStorage.setItem('user', JSON.stringify(res));
//   }

//   const onFailure = (res) => {
//     alert('failed to login!');
//   }

//   const autoLoad = () => {
//       if(user){
//           return false;
//       }
//       return true
//   }

//   const { signIn } = useGoogleLogin({
//       process.env.REACT_APP_CLIENT_ID,
//       cookiePolicy: 'single_host_origin', 
//       isSignedIn: true, 
//       autoLoad,
//       onSuccess,
//       onFailure,
//   });

//   useEffect(() => {
//       signIn();
//       console.log(user);
//   }, []);

  return (
    <>
        <NavBar setSearchInput={setSearchInput} displaySidebar ={displaySidebar} setDisplaySidebar ={setDisplaySidebar} littleSidebar ={littleSidebar} setLittleSidebar={setLittleSidebar} />
        <div style={{ display: 'flex', marginTop: '10vh' }}>
            <SideBar displaySidebar ={displaySidebar} setDisplaySidebar ={setDisplaySidebar} littleSidebar ={littleSidebar} setLittleSidebar={setLittleSidebar} />
            <TabPanelScroll searchInput={searchInput} />
        </div>   
    </>
  )
}

export default App;

