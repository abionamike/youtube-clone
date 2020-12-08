import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const PanelScroll = () => {
  const classes = useStyles();
  const chipData = [
    { key: 0, label: 'All' },
    { key: 1, label: 'JavaScript' },
    { key: 2, label: 'HTML' },
    { key: 3, label: 'Python' },
    { key: 4, label: 'Live' },
    { key: 5, label: 'Damilola Bamiloye' },
    { key: 6, label: 'Website' },
    { key: 7, label: 'Nollywood' },
    { key: 8, label: 'Computer Programming' },
    { key: 9, label: 'macOS' },
    { key: 10, label: 'Contemporary Worship Music' },
    { key: 11, label: 'MySQL' },
    { key: 12, label: 'Data Science' },
    { key: 13, label: 'Chess' },
    { key: 14, label: 'Linux' },
    { key: 15, label: 'Apple MacBook Pro' },
    { key: 16, label: 'Computers' },
    { key: 17, label: 'Software Engineering' },
    { key: 18, label: 'Recently uploaded' },
  ];

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => (
        <li key={data.key} {...a11yProps(data.key)}>
            <Chip label={data.label} className={classes.chip} clickable />
        </li>
        )
    )}
    </Paper>
  );
}

export default PanelScroll;