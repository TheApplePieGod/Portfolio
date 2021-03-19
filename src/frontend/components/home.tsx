import { Button, Paper, TextField, Typography, Select, MenuItem, useTheme } from '@material-ui/core';
import React from 'react';
import * as theme from '../theme';
import { makeStyles } from "@material-ui/core";
import { useWindowDimensions } from './useWindowDimensions';
import { Transition } from 'react-transition-group';

const animationDuration = 200;

const useStyles = makeStyles(theme => ({
    contentLarge: {
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: "20%"
    },
    contentSmall: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    line: {
        position: "relative",
        zIndex: -1,
        marginTop: "-20px",
        marginBottom: "20px",
        [theme.breakpoints.down('xs')]: {
            clipPath: "inset(0px 225px 0px 0px)"
        },
        [theme.breakpoints.up('sm')]: {
            clipPath: "inset(0px 125px 0px 0px)"
        },
        [theme.breakpoints.up('md')]: {
            clipPath: "inset(0px 75px 0px 0px)"
        },
        [theme.breakpoints.up('lg')]: {
            clipPath: "inset(0px 25px 0px 0px)"
        },
    },
    lineCondensed: {
        position: "relative",
        zIndex: -1,
        marginTop: "-20px",
        marginBottom: "20px",
        [theme.breakpoints.down('xs')]: {
            transform: "translateX(115px)",
            clipPath: "inset(0px 225px 0px 0px)"
        },
        [theme.breakpoints.up('sm')]: {
            transform: "translateX(65px)",
            clipPath: "inset(0px 125px 0px 0px)"
        },
        [theme.breakpoints.up('md')]: {
            transform: "translateX(40px)",
            clipPath: "inset(0px 75px 0px 0px)"
        },
        [theme.breakpoints.up('lg')]: {
            transform: "translateX(20px)",
            clipPath: "inset(0px 25px 0px 0px)"
        },
    }
}));

export const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { height, width } = useWindowDimensions();

    const textTransitionStyles: any = {
        entering: { opacity: 0 },
        entered:  { opacity: 1 },
        exiting:  { },
        exited:  { },
    };

    return (
        <Transition
            timeout={animationDuration}
            in={location.pathname == '/'}
            appear={true}
        >
            {enterState => (
                <div className={width <= 1200 ? classes.contentSmall : classes.contentLarge} style={{ transition: `opacity ${animationDuration}ms ease-in-out`, ...textTransitionStyles[enterState] }}>
                    <Typography variant="h1" color="textPrimary">
                        Evan
                        <br/>
                        Thompson
                    </Typography>
                    <img src="images/line.png" width={500} className={width <= 1200 ? classes.lineCondensed : classes.line} />
                    <Typography variant="h5" color="textSecondary" style={{ lineHeight: "40px" }}>
                        programmer
                        <br/>
                        web engineer
                        <br />
                        game dev
                    </Typography>
                </div>
            )}
        </Transition>
    );
}