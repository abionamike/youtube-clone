/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({ searchInput }) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const handleSubmit = async () => {    
            const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 40,
                    key: process.env.REACT_APP_API_KEY,
                    safeSearch: 'strict',
                    relevanceLanguage: 'en',
                    regionCode: 'NG',
                    q: searchInput || 'Javascript',
                }
            });
            setVideos(data.items);
        }

        handleSubmit();
    }, [searchInput]);

    return (
        <Grid container justify="center" alignItems="center">
            {videos.map(video => (
                <VideoItem key={video.etag} video={video} />
           ))}
        </Grid>
    );
}

export default VideoList
