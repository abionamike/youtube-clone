import React from 'react';
import { MenuList, MenuItem, Paper, ListItemIcon, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0
  },
  menuItem: {
    padding: '8px',
    paddingLeft: '25px',
    paddingRight: '50px' 
  },
  typography: {
    fontSize: '15px',
    fontWeight: '600',
    paddingLeft: '25px',
    padding: '6px',
    textTransform: 'uppercase',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: '35px'
  }
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem title="Home" className={classes.menuItem}>
          <ListItemIcon>
            <HomeIcon fontSize="default" style={{ color: '#f00' }} />
          </ListItemIcon>
          <Typography variant="body2"> Home </Typography>
        </MenuItem>
        <MenuItem title="Trending" className={classes.menuItem}>
          <ListItemIcon>
            <WhatshotIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Trending </Typography>
        </MenuItem>
        <MenuItem title="Subscriptions" className={classes.menuItem}>
          <ListItemIcon>
            <SubscriptionsIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> Subscriptions </Typography>
        </MenuItem>
        <hr/>
        <MenuItem title="Library" className={classes.menuItem}>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> Library </Typography>
        </MenuItem>
        <MenuItem title="History" className={classes.menuItem}>
          <ListItemIcon>
            <HistoryIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> History </Typography>
        </MenuItem>
        <MenuItem title="Your videos" className={classes.menuItem}>
          <ListItemIcon>
            <OndemandVideoSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> Your videos </Typography>
        </MenuItem>
        <MenuItem title="Watch later" className={classes.menuItem}>
          <ListItemIcon>
            <WatchLaterSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> Watch later </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <ListItemIcon>
            <ThumbUpAltSharpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2" noWrap> Liked videos </Typography>
        </MenuItem>
        <hr/>
        <Typography className={classes.typography} color="textSecondary" noWrap>Subscriptions</Typography>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>TM</Avatar>
          <Typography variant="body2" noWrap> Traversy Media </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>TNN</Avatar>
          <Typography variant="body2" noWrap> The Net Ninja </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>JM</Avatar>
          <Typography variant="body2" noWrap> JavaScript Mastery </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>CS</Avatar>
          <Typography variant="body2" noWrap> Corey Schafer </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>DI</Avatar>
          <Typography variant="body2" noWrap> Dennis Ivy </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>DE</Avatar>
          <Typography variant="body2" noWrap> Dev Ed </Typography>
        </MenuItem>
        <MenuItem title="Liked videos" className={classes.menuItem}>
          <Avatar className={classes.small}>TWT</Avatar>
          <Typography variant="body2" noWrap> Tech With Tim </Typography>
        </MenuItem>
        <hr/>
        <Typography className={classes.typography} color="textSecondary" noWrap>More from YouTube</Typography>
        <MenuItem title="Youtube Premium" className={classes.menuItem}>
          <ListItemIcon>
            <YouTubeIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Youtube Premium </Typography>
        </MenuItem>
        <MenuItem title="Gaming" className={classes.menuItem}>
          <ListItemIcon>
            <VideogameAssetIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Gaming </Typography>
        </MenuItem>
        <MenuItem title="Live" className={classes.menuItem}>
          <ListItemIcon>
            <DynamicFeedIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Live </Typography>
        </MenuItem>
        <hr/>
        <MenuItem title="Live" className={classes.menuItem}>
          <ListItemIcon>
            <SettingsIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Live </Typography>
        </MenuItem>
        <MenuItem title="Report History" className={classes.menuItem}>
          <ListItemIcon>
            <FlagIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Report History </Typography>
        </MenuItem>
        <MenuItem title="Help" className={classes.menuItem}>
          <ListItemIcon>
            <HelpIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Help </Typography>
        </MenuItem>
        <MenuItem title="Send Feedback" className={classes.menuItem}>
          <ListItemIcon>
            <FeedbackIcon fontSize="default" />
          </ListItemIcon>
          <Typography variant="body2"> Send Feedback </Typography>
        </MenuItem>
        <hr/>
      </MenuList>
    </Paper>
  );
}

export default SideBar;