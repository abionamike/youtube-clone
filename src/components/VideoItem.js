import React from 'react';
import { Paper, Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 250,
    margin: theme.spacing(1),
    cursor: 'pointer'
  },
  image: { 
    display: 'inline-block', 
    overflow: 'hidden' 
  },
  title: { display: 'flex' }
}));

const VideoItem = ({ video }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
        <Grid item className={classes.image}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{ width: '250px' }} />
        </Grid>
        <Grid item className={classes.title}>
            <Avatar>W</Avatar>
            <Typography title={video.snippet.title}>{video.snippet.title.length > 50 ? (`${video.snippet.title.slice(0, 51)}...`) : (video.snippet.title)}</Typography>
        </Grid>
    </Paper>
  );
}

export default VideoItem;