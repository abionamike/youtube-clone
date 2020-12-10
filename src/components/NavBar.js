import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar';
import DesktopIcons from './DesktopIcons';
import RenderMenu from './RenderMenu';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.54)',
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {
    boxShadow: 'none',
  }
}));

const NavBar = ({ setSearchInput }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="fixed" color="inherit" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => e.preventDefault()}>
            <Typography title="YouTube Home" className={classes.title} variant="h6" noWrap> YouTube<YouTubeIcon fontSize="inherit" style={{ color: '#f00' }} /> </Typography>
          </Link>
          <div className={classes.grow} />
          <SearchBar setSearchInput={setSearchInput} />
          <div className={classes.grow} />
          <DesktopIcons setAnchorEl={setAnchorEl} />
        </Toolbar>
      </AppBar>
      <RenderMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </div>
  );
}

export default NavBar;