import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgba(241, 231, 229, 0.29)',
    width: "100%",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "49px",
    letterSpacing: "0.04em",
    color: "#000000",
    marginLeft: "110px",
    textTransform: "uppercase",
    [theme.breakpoints.down('xs')]: {
        fontSize: "25px",
        margin: "0",
      },    
  },
}));


const Nav = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Delivered
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Nav