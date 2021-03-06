 /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { MenuList, MenuItem, ListItemIcon, Typography, Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple, green, red, blue, yellow } from '@material-ui/core/colors';
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
    height: '100vh',
    overflow: 'scroll',
  },
  menuItem: {
    padding: '8px',
    paddingLeft: '25px',
    paddingRight: '30px' 
  },
  menuItemTwo: {
    display: 'flex',
    flexDirection: 'column', 
    padding: '15px 5px'
  },
  typography: {
    fontSize: '15px',
    fontWeight: '600',
    paddingLeft: '25px',
    padding: '6px',
    textTransform: 'uppercase',
  },
  typographyTwo: {
    fontSize: '10px',
    padding: '6px',
  },
  baseTypo: {
    paddingLeft: '25px',
    fontWeight: '600',
  },
  subscriptionAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: '25px',
  },
}));

const SideBar = ({ displaySidebar, setDisplaySidebar, littleSidebar, setLittleSidebar }) => {
  const classes = useStyles();

  const toggleSidebar = () => {
    if(window.innerWidth <= 808){
      setLittleSidebar('none');
      setDisplaySidebar('none');
    } else if(window.innerWidth > 808 && window.innerWidth <= 1350){
      setDisplaySidebar('none');
      setLittleSidebar('block');
    } else {
      setDisplaySidebar('block');
      setLittleSidebar('none');
    }
  }

  window.addEventListener('resize', toggleSidebar);

  useEffect(() => {
    toggleSidebar();
  }, []);

  return (
    <>
      <Grid className={classes.root} style={{ display: displaySidebar }}>
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
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: blue[700] }}>TM</Avatar>
            <Typography variant="body2" noWrap> Traversy Media </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: deepOrange[500] }}>TNN</Avatar>
            <Typography variant="body2" noWrap> The Net Ninja </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: deepPurple[500] }}>JM</Avatar>
            <Typography variant="body2" noWrap> JavaScript Mastery </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: green[900] }}>CS</Avatar>
            <Typography variant="body2" noWrap> Corey Schafer </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: blue[700] }}>DI</Avatar>
            <Typography variant="body2" noWrap> Dennis Ivy </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar} style={{ backgroundColor: red[700] }}>DE</Avatar>
            <Typography variant="body2" noWrap> Dev Ed </Typography>
          </MenuItem>
          <MenuItem title="Liked videos" className={classes.menuItem}>
            <Avatar className={classes.subscriptionAvatar}  style={{ backgroundColor: yellow[800] }}>TWT</Avatar>
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
          <Typography className={classes.baseTypo} variant="body2" color="textSecondary">About Press Copyright</Typography>
          <Typography className={classes.baseTypo} variant="body2" color="textSecondary">Contact us Creators</Typography>
          <Typography className={classes.baseTypo} variant="body2" gutterBottom color="textSecondary">Advertise Developers</Typography>
          <Typography className={classes.baseTypo} variant="body2" color="textSecondary">Terms Privacy Policy & Safety</Typography>
          <Typography className={classes.baseTypo} variant="body2" color="textSecondary">How YouTube works</Typography>
          <Typography className={classes.baseTypo} variant="body2" gutterBottom color="textSecondary">Test new features</Typography>
          <br/>
          <Typography variant="body2" gutterBottom color="textSecondary" style={{ paddingLeft: '25px' }}>&copy; 2020 Google LLC</Typography>
          <br/>
          <br/>
          <br/>
        </MenuList>
      </Grid>
      <Grid style={{ display: littleSidebar}}>
        <MenuList>
          <MenuItem title="Home" className={classes.menuItemTwo} style={{ color: '#f00' }}>
            <HomeIcon fontSize="default" />
            <Typography variant="caption" align="center" className={classes.typographyTwo}> Home </Typography>
          </MenuItem>
          <MenuItem title="Trending" className={classes.menuItemTwo}>
            <WhatshotIcon fontSize="default" />
            <Typography variant="caption" align="center" className={classes.typographyTwo}> Trending </Typography>
          </MenuItem>
          <MenuItem title="Subscriptions" className={classes.menuItemTwo}>
            <SubscriptionsIcon fontSize="default" />
            <Typography variant="caption" align="center" className={classes.typographyTwo}> Subscriptions </Typography>
          </MenuItem>
          <MenuItem title="Library" className={classes.menuItemTwo}>
            <VideoLibraryIcon fontSize="default" />
            <Typography variant="caption" align="center" className={classes.typographyTwo}> Library </Typography>
          </MenuItem>
        </MenuList>
      </Grid>
    </>
  );
}

export default SideBar;