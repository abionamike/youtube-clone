import React from 'react'; 
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <>
           {videos.map(video => (
               <Grid key={video.etag}  container spacing={10}>
                   <VideoItem video={video} onVideoSelect={onVideoSelect} />
               </Grid>
           ))}
        </>
    )
}

export default VideoList
