import React from 'react';
import { MenuList, MenuItem, Paper, ListItemIcon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';

const useStyles = makeStyles({
  root: {
    borderRadius: 0
  },
  menuItem: {
    padding: '10px',
    paddingLeft: '25px',
    paddingRight: '50px' 
  }
});

const SideBar = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <HomeIcon fontSize="default" style={{ color: '#f00' }} />
          </ListItemIcon>
          <Typography variant="inherit"> Home </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <WhatshotIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit"> Trending </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <SubscriptionsIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Subscriptions </Typography>
        </MenuItem>
        <hr/>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Library </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <HistoryIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> History </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <OndemandVideoSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Your Videos </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <WatchLaterSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Watch later </Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <ThumbUpAltSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Liked videos </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default SideBar;