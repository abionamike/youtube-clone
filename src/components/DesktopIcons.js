/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, Avatar, Menu, MenuItem, ListItemIcon, Typography } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      color: 'rgba(0, 0, 0, 0.54)',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
        color: 'rgba(0, 0, 0, 0.54)',
    },
    profile: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    icon: { color: '#f00' },
    menuItem: {
        padding: '8px'
    },
    button: {
        outline: 'none',
        border: '1px solid blue',
        color: 'blue',
        borderRadius: '5px',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingRight: '12px',
        paddingLeft: '12px',
        fontSize: '15px',
        cursor: 'pointer',
        margin: 'auto'
    }
}));

const DesktopIcons = ({ setAnchorEl, handleSearchBar }) => {
    const classes = useStyles();
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    return (
        <>
            <div className={classes.sectionDesktop}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <>
                            <IconButton title="Create" {...bindTrigger(popupState)}>
                                <VideoCallIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <OndemandVideoIcon />
                                    </ListItemIcon>
                                    <Typography variant="body2">Upload Video</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <DynamicFeedIcon />
                                    </ListItemIcon>
                                    <Typography variant="body2">Go Live</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <>
                            <IconButton title="YouTube apps" {...bindTrigger(popupState)}>
                                <AppsIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <LiveTvIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube TV</Typography>
                                </MenuItem>
                                <hr/>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <PlayCircleFilledIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube Music</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube Kids</Typography>
                                </MenuItem>
                                <hr/>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">Creator Academy</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube for Artists</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </PopupState>
                <IconButton title="Notifications">
                    <NotificationsIcon />
                </IconButton>
                {isAuthenticated ? 
                    <IconButton edge="end" aria-label="account of current , isAuthenticated" aria-haspopup="true" onClick={handleProfileMenuOpen}>
                        <Avatar src={user.picture} className={classes.profile} />
                    </IconButton> :
                    <span onClick={() => loginWithRedirect()} className={classes.button}>Sign In</span>
                }
            </div>
            <div className={classes.sectionMobile}>
                <IconButton onClick={handleSearchBar}>
                    <SearchIcon />
                </IconButton>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <div>
                            <IconButton title="Create" {...bindTrigger(popupState)}>
                                <VideoCallIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <OndemandVideoIcon />
                                    </ListItemIcon>
                                    <Typography variant="body2">Upload Video</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <DynamicFeedIcon />
                                    </ListItemIcon>
                                    <Typography variant="body2">Go Live</Typography>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <div>
                            <IconButton title="YouTube apps" {...bindTrigger(popupState)}>
                                <AppsIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <LiveTvIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube TV</Typography>
                                </MenuItem>
                                <hr/>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <PlayCircleFilledIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube Music</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube Kids</Typography>
                                </MenuItem>
                                <hr/>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">Creator Academy</Typography>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <ListItemIcon>
                                        <YouTubeIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <Typography variant="body2">YouTube for Artists</Typography>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </PopupState>
                <IconButton title="Notifications">
                    <NotificationsIcon />
                </IconButton>
                {isAuthenticated ? (
                    <IconButton edge="end" aria-label="account of current , isAuthenticated" aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                        <Avatar src={user.picture} className={classes.profile} />
                    </IconButton>
                ) : (
                    <span onClick={() => loginWithRedirect()} className={classes.button}>Sign In</span>
                )}
            </div>
        </>
    )
}

export default DesktopIcons;
