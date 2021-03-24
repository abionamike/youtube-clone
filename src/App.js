/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import TabPanelScroll from './components/TabPanelScroll';

const App = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [displaySidebar, setDisplaySidebar] = useState('block');
  const [littleSidebar, setLittleSidebar] = useState('none');
  const { isLoading } = useAuth0();

  if(isLoading){
    return <div>Loading...</div>
  }
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

