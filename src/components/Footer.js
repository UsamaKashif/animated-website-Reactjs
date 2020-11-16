import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        height: "179px",
        background: "#FC682E"
    },
    title: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "50px",
        lineHeight: "59px",
        textAlign: "center",
        letterSpacing: "0.04em",
        color: "#FFFFFF",
        paddingTop: "60px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "40px",
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px",
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: "20px",
          },
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Fade bottom>
                <Typography className={classes.title}>
                    Designed By: Usama Kashif
                </Typography>
            </Fade>
        </footer>
    )
}

export default Footer