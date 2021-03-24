/* eslint-disable no-restricted-globals */
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Paper, ListItemIcon, Typography, Avatar, Grid, Link } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';

const useStyles = makeStyles({
  root: {
    width: 235,
  },
  typography: {
    display: 'block'
  },
  profile: {
    display: 'flex',
    marginLeft: '4px',
    padding: '10px'
  },
  menuItem: {
    padding: '10px'
  }
});

const RenderMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  const classes = useStyles();
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <Paper className={classes.root}>
      <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
        {isAuthenticated && (
          <div>
            <div className={classes.profile}>
                <ListItemIcon>
                    <Avatar src={user.picture} />
                </ListItemIcon>
                <Grid item>
                  <Typography className={classes.typography} variant="h5">{user.name}</Typography>
                  <Typography className={classes.typography} gutterBottom variant="inherit">{user.email}</Typography>
                  <Link href="#" style={{ textDecoration: "none" }} onClick={e => e.preventDefault()}>Manage Your Google account</Link>
                </Grid>
            </div>
            <hr/>
          </div>
          )
        }
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <Typography variant="inherit">Your channel</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <Typography variant="inherit">Purchases and memberships</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>YouTube Studio</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Switch account</Typography>
        </MenuItem>
        <span onClick={() => logout({ returnTo: window.location.origin })}>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Sign out</Typography>
          </MenuItem>
        </span>
        <hr/>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Appearance: Device theme</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Language: English</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Location: Nigeria</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Settings</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Your data in YouTube</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Help</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Send feedback</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <KeyboardIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Keyboard shortcuts</Typography>
        </MenuItem>
        <hr/>
        <MenuItem className={classes.menuItem}>
            <Typography variant="inherit" noWrap>Restricted Mode: Off</Typography>
        </MenuItem>
      </Menu>
    </Paper>
  );
}

export default  RenderMenu;
