/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar';
import DesktopIcons from './DesktopIcons';
import RenderMenu from './RenderMenu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

const NavBar = ({ setSearchInput, displaySidebar, setDisplaySidebar, littleSidebar, setLittleSidebar }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [appDisplay, setAppDisplay] = useState('block');
  const [searchDisplay, setSearchDisplay] = useState('none');

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleSidebar = () => {
    if(displaySidebar === 'block'){
      setDisplaySidebar('none');
    } else {
      setDisplaySidebar('block')
    }

    if(littleSidebar === 'block'){
      setLittleSidebar('none');
    } else {
      setLittleSidebar('block')
    }
  }

  const handleSearchBar = () => {
    setAppDisplay('none');
    setSearchDisplay('block');
  }

  const toggleSearchBar = () => {
    setAppDisplay('block');
    setSearchDisplay('none');
    if(appDisplay === 'none' && window.innerWidth <= 650){
      setAppDisplay('none');
      setSearchDisplay('block');
    }
  }

  window.addEventListener('resize', toggleSearchBar);

  useEffect(() => {
    toggleSearchBar()
  }, []);

  return (
    <>
      <div className={classes.grow} style={{ display: appDisplay }}>
        <AppBar className={classes.appBar} position="fixed" color="inherit">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => e.preventDefault()}>
              <Typography title="YouTube Home" className={classes.title} variant="h6" noWrap> YouTube<YouTubeIcon fontSize="inherit" style={{ color: '#f00' }} /> </Typography>
            </Link>
            <div className={classes.grow} />
            <SearchBar setSearchInput={setSearchInput} type="main" />
            <div className={classes.grow} />
            <DesktopIcons setAnchorEl={setAnchorEl} handleSearchBar={handleSearchBar} />
          </Toolbar>
        </AppBar>
        <RenderMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
      </div>
      <AppBar className={classes.appBar} position="fixed" color="inherit"  style={{ display: searchDisplay }}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={toggleSearchBar}>
            <ArrowBackIcon />
          </IconButton>
          <SearchBar setSearchInput={setSearchInput} type="mini" />
        </Toolbar>
      </AppBar>
    </>
  );

}

export default NavBar;