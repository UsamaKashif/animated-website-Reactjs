import React from 'react'
import transport from "../Art/transport.svg"
import Nav from './Nav'

import useWebAnimations, { slideInDown, slideInUp, backInRight, heartBeat, fadeIn } from "@wellyshen/use-web-animations";

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "calc(100vw - 108px)",
        margin: "0 auto",
        marginTop: "186px",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('lg')]: {
            marginTop: "100px",
          },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "45px",
          },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "0",
            alignItems: "center",
            alignContent: "center",
            width: "calc(100vw - 30px)",
            height: "100vh"
          },
        
    },
    content: {
        width: "625px",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    imgContainer: {
        width: "968px",
        height: "413px",
        [theme.breakpoints.down('lg')]: {
            width: "800px",
          },
        [theme.breakpoints.down('sm')]: {
            width: "600px",
            margin: "0 auto"
          },
        [theme.breakpoints.down('xs')]: {
            width: "250px",
            margin: "0 auto",
            height: "203px",
            
          },
        
    },
    transportImg: {
        width:'100%',
        height: "100%"
    },
    titleContainer: {
        width: "631px" ,
        [theme.breakpoints.down('lg')]: {
            width: "500px",
          },      
        [theme.breakpoints.down('md')]: {
            width: "430px",
          },      
        [theme.breakpoints.down('sm')]: {
            width: "680px",
            margin: '0 auto',
            textAlign: "center",
          },      
        [theme.breakpoints.down('xs')]: {
            width: "250px",
            margin: '0 auto',
            textAlign: "center",
          },      
    },
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "70px",
        lineHeight: "82px",
        letterSpacing: "0.04em",
        
        color: "#000000",
        [theme.breakpoints.down('lg')]: {
            fontSize: "50px",
          }, 
        [theme.breakpoints.down('md')]: {
            fontSize: "47px",
        },   
        [theme.breakpoints.down('sm')]: {
            fontSize: "47px",
        },   
        [theme.breakpoints.down('sm')]: {
            fontSize: "26px",
            lineHeight: "55px",
        },   
    },
    brief: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "35px",
        lineHeight: "41px",
        letterSpacing: "0.02em",
        
        color: "#000000",
        marginTop: "8px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "25px",
          }, 
        [theme.breakpoints.down('md')]: {
            fontSize: "22px",
        }, 
        [theme.breakpoints.down('md')]: {
            fontSize: "20px",
            marginTop: "7px",
        }, 
    },
    btn: {
        width: "315px",
        height: "118px",
        
        background: "#B9E2E4",
        marginTop: "61px",

        "&:hover": {
            backgroundColor: "#B9E2E4"
        },
        [theme.breakpoints.down('lg')]: {
            width: "calc(315px / 1.5)",
            height: "calc(118px / 1.5)",
          },
        [theme.breakpoints.down('md')]: {
            width: "calc(315px / 1.8)",
            height: "calc(118px / 1.8)",
        }, 
        [theme.breakpoints.down('md')]: {
            width: "calc(315px / 1.9)",
            height: "calc(118px / 1.9)",
            marginTop: "38px",
        }, 
    },
    btnText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "38px",
        lineHeight: "45px",
        letterSpacing: "0.02em",
        
        color: "#000000",
        [theme.breakpoints.down('lg')]: {
            fontSize: "26px",
          }, 
        [theme.breakpoints.down('md')]: {
            fontSize: "22px",
          }, 
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
          }, 
    }
}))


const Header = () => {
    const classes = useStyles();

    const {ref:title} = useWebAnimations({...slideInDown})
    const {ref:brief} = useWebAnimations({...slideInUp})
    const {ref:button} = useWebAnimations({...slideInUp})
    const {ref:image} = useWebAnimations({...fadeIn})
    return (
        <div>
           <Nav />
           <div className={classes.container}> 
                <section className={classes.content}>
                    <div className={classes.titleContainer}>
                        <Typography ref={title} className={classes.title}>
                            ON DEMAND PARCEL <span style={{color: "#FC7337"}}>DELIVERY</span>
                        </Typography>
                        <Typography ref={brief} className={classes.brief}>
                            Sed feugiat nisi id nunc rhoncus, ut tempor diam fringilla. Nulla viverra sagittis ligula. 
                        </Typography>
                        <Button ref={button} variant="contained" className={classes.btn}>
                            <Typography className = {classes.btnText}>
                                Learn More
                            </Typography>
                        </Button>
                    </div>
                </section>

                <section className={classes.imgContainer}>
                    <img ref={image} className={classes.transportImg} src={transport} alt="transport" />
                </section>
           </div>
        </div>
    )
}

export default Header
