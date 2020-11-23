import React, { useState } from 'react';
import dotenv from 'dotenv';
import { Grid } from '@material-ui/core';
import  SearchBar  from './components/SearchBar';
import  VideoList  from './components/VideoList';
import  VideoDetail  from './components/VideoDetail';
import axios from 'axios';

dotenv.config();

const  App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 30,
        key: process.env.API_KEY,
        q: searchTerm,
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

    console.log(response);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
