import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 250,
    margin: theme.spacing(1),
    cursor: 'pointer',
    background: '#f5f5f5'
  },
  image: { 
    display: 'inline-block', 
    overflow: 'hidden',
    marginBottom: '8px'
  },
  title: { 
    display: 'flex',
    marginBottom: '10px' 
  },
  title2: { 
    marginLeft: '55px',
    paddingBottom: '30px'
  },
  typography: {
    fontSize: '17.5px',
    lineHeight: '1.5rem',
    fontWeight: '500',
    marginLeft: '15px'
  }
}));

const VideoItem = ({ video }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.paper} xs={12} sm={6}>
      <Grid item className={classes.image}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{ width: '100%' }} />
      </Grid>
      <Grid item className={classes.title}>
          <Avatar src={video.snippet.thumbnails.medium.url} />
          <Typography className={classes.typography} title={video.snippet.title}>{video.snippet.title.length > 40 ? (`${video.snippet.title.slice(0, 32)}...`) : (video.snippet.title)}</Typography>
      </Grid>
      <Grid item className={classes.title2}>
          <Typography color="textSecondary" title={video.snippet.channelTitle}>{video.snippet.channelTitle}</Typography>
          <Typography color="textSecondary">2.5k views . 1 year ago</Typography>
      </Grid>
    </Grid>
  );
}

export default VideoItem;