/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import TabPanelScroll from '../components/TabPanelScroll';

const MainPage = () => {

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <TabPanelScroll />
            </div>   
        </>
    )
}

export default MainPage;
