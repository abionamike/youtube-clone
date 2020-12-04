/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../api/apiKey';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import TabPanelScroll from '../components/TabPanelScroll';

const MainPage = ({ history, user }) => {
    // const [videos, setVideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 30,
                key: API_KEY,
                safeSearch: 'strict',
                relevanceLanguage: 'en',
                regionCode: 'NG',
                q: 'javascript',
            }
        });

        console.log(user);
        console.log(response.data);
    }

    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // }

    useEffect(() => {
        handleSubmit()
    }, []);

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
