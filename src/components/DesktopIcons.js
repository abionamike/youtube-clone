/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Badge, Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
    purple: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
}));

const DesktopIcons = ({ setAnchorEl }) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    return (
        <>
            <div className={classes.sectionDesktop}>
                <IconButton>
                    <VideoCallIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton aria-label="show 17 new notifications">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton edge="end" aria-label="account of current user" aria-haspopup="true" onClick={handleProfileMenuOpen}>
                    <Avatar src={user.profileObj.imageUrl} className={classes.purple} />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <VideoCallIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton aria-label="show 17 new notifications">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton edge="end" aria-label="account of current user" aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                    <Avatar src={user.profileObj.imageUrl} className={classes.purple} />
                </IconButton>
            </div>
        </>
    )
}

export default DesktopIcons;
