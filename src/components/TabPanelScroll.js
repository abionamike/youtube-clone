import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Badge } from '@material-ui/core';
import { ShoppingBasket, ThumbDown, ThumbUp } from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    backgroundColor: '#fafafa',
  },
  appBar: {
    padding: '0px',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    boxShadow: '0px 0px 0px #fff',
    backgroundColor: '#fff',
  }
}));

const TabPanelScroll = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const list = {
    marginRight: '20px',
    border: '1px solid #ddd',
    borderRadius: '18px',
    background: '#eee',
    padding: '4px 12px',
  } 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" indicatorColor="transparent" textColor="primary" aria-label="scrollable force tabs example" style={{ padding: 0, marginLeft: 0 }}>
          <ul style={{ display: 'flex', listStyle: 'none', marginLeft: 0 }}>
            <li style={list} {...a11yProps(0)}>All</li>
            <li style={list} {...a11yProps(1)}>JavaScript</li>
            <li style={list} {...a11yProps(2)}>HTML</li>
            <li style={list} {...a11yProps(3)}>Python</li>
            <li style={list} {...a11yProps(4)}>Live</li>
            <li style={list} {...a11yProps(5)}>Damilola Bamiloye</li>
            <li style={list} {...a11yProps(7)}>Website</li>
            <li style={list} {...a11yProps(6)}>Nollywood</li>
            <li style={list} {...a11yProps(7)}>Computer Programming</li>
            <li style={list} {...a11yProps(8)}>macOS</li>
            <li style={list} {...a11yProps(9)}>Contemporary Worship Music</li>
            <li style={list} {...a11yProps(10)}>MySQL</li>
            <li style={list} {...a11yProps(11)}>Data Science</li>
            <li style={list} {...a11yProps(12)}>Chess</li>
            <li style={list} {...a11yProps(13)}>Linux</li>
            <li style={list} {...a11yProps(14)}>Apple MacBook Pro</li>
            <li style={list} {...a11yProps(15)}>Computers</li>
            <li style={list} {...a11yProps(16)}>Software Engineering</li>
            <li style={list} {...a11yProps(17)}>Recently uploaded</li>
          </ul>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default TabPanelScroll;