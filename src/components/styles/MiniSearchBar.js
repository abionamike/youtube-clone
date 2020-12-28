import { fade, makeStyles } from '@material-ui/core/styles';

export const useMiniStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '550px',
    border: '1px solid #ddd',
    flexDirection: 'row-reverse',
    display: 'flex'
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    background: '#f2f2f2',
    color: 'rgba(0, 0, 0, 0.44)',
    borderLeft: '1px solid #ddd',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: '16px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
  },
}));