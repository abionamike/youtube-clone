import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs } from '@material-ui/core';
import VideoList from './VideoList';
import PanelScroll from './PanelScroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '50%',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  appBar: {
    padding: '0px',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    boxShadow: '0px 0px 0px #fff',
    backgroundColor: '#fff',
    marginBottom: '15px',
  }
}));

const TabPanelScroll = ({ searchInput }) =>{
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" textColor="primary" aria-label="scrollable force tabs example" >
          <PanelScroll />
        </Tabs>
      </AppBar>
      <VideoList searchInput={searchInput} />
    </div>
  );
}

export default TabPanelScroll;