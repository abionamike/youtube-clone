/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import TabPanelScroll from '../components/TabPanelScroll';

const MainPage = () => {
    const [searchInput, setSearchInput] = useState('javascript');

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

export default MainPage;
