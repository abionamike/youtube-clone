/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { API_KEY } from '../api/apiKey';
import VideoItem from './VideoItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      margin: theme.spacing(0, 2),
      display: 'flex',
      flexWrap: 'wrap',
    }
  }));

const VideoList = ({ searchInput }) => {
    const classes = useStyles();

    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const handleSubmit = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
    
            const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 40,
                    key: API_KEY,
                    safeSearch: 'strict',
                    relevanceLanguage: 'en',
                    regionCode: 'NG',
                    q: searchInput || 'python',
                }
            });

            console.log(user);
            console.log(data.items);
            setVideos(data.items);
        }

        // handleSubmit();
    }, [searchInput]);

    return (
        <div className={classes.root}>
            {videos.map(video => (
                <VideoItem key={video.etag} video={video} />
           ))}
        </div>
    );
}

export default VideoList
