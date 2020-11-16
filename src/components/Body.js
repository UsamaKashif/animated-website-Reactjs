import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from "@material-ui/core";


import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: "flex",
        justifyContent: "center",
        marginTop: '170px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center"
          },
          [theme.breakpoints.down('xs')]: {
            marginTop: '120px',
          },
          
    },
    card1: {
        marginRight: "calc(133px / 2)",
        width: "350px",
        height: "350px",
        background: "#F7C1BE",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0",
            marginBottom: "40px"
          },
        [theme.breakpoints.down('xs')]: {
            width: "250px",
            height: "250px",
          },
    },
    card2: {
        marginLeft: "calc(133px / 2)",
        width: "350px",
        height: "350px",
        background: "#F7C1BE",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0",
          },
          [theme.breakpoints.down('xs')]: {
            width: "250px",
            height: "250px",
          },
    },
    title1: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "49px",
        textAlign: "center",
        letterSpacing:" 0.04em",
        color: "#000000",
        marginTop: "50%",
        transform: "translateY(-50px)",
        [theme.breakpoints.down('xs')]: {
            fontSize: "23px"
          },
        
    },
    title2: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "49px",
        textAlign: "center",
        letterSpacing:" 0.04em",
        color: "#000000",
        marginTop: "50%",
        transform: "translateY(-50px)",
        [theme.breakpoints.down('xs')]: {
            fontSize: "23px"
          },
    },
    do: {
        margin: "0 auto",
        marginTop: "230px",
        marginBottom: "380px",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "200px",
        },

    },
    what: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "62px",
        lineHeight: "70px",
        textAlign: "center",
        letterSpacing:" 0.04em",
        color: "#000000",
        [theme.breakpoints.down('lg')]: {
            fontSize: "58px",
        },
    },
    contentContainer: {
        width: "1307px",
        marginTop:"48px" ,
        margin: "0 auto",
        [theme.breakpoints.down('lg')]: {
            width: "950px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "600px"
        },
        [theme.breakpoints.down('xs')]: {
            width: "270px"
        },
    },
    content: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "35px",
        lineHeight: "41px",
        textAlign: "center",
        letterSpacing:" 0.04em",
        color: "#000000",
        [theme.breakpoints.down('lg')]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "23px",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
        },
    }
}))

const Body = () => {
    const classes = useStyles();

    return (
        <div>
            <section className={classes.cards}>
                <Slide left>
                    <Card className={classes.card1}>
                        <Typography className={classes.title1}>
                            Moving Millions of
                            parcels every month
                        </Typography>
                    </Card>
                </Slide>

                <Slide right>
                    <Card className={classes.card2}>
                        <Typography className={classes.title2}>
                            Thousands of corporate customers
                        </Typography>
                    </Card>
                </Slide>
            </section>

            <section className={classes.do}>
                <Fade cascade>
                    <Typography className={classes.what}>
                        WHAT WE DO?
                    </Typography>
                </Fade>
                <div className={classes.contentContainer}>
                    <Fade cascade>
                        <Typography className={classes.content}>
                        Nulla ut cursus ante. Ut vestibulum odio risus, sit amet dictum massa varius eget. Donec nec feugiat lorem, nec laoreet velit. Nam lacinia nulla quis mi cursus condimentum. Vivamus commodo, felis sed tincidunt pharetra, quam odio suscipit ligula, quis molestie 
                        </Typography>
                    </Fade>
                </div>
            </section>
        </div>
    )
}

export default Body