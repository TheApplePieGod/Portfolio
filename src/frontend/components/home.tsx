import { Button, Paper, TextField, Typography, Select, MenuItem, useTheme } from '@material-ui/core';
import React from 'react';
import * as theme from '../theme';
import { makeStyles } from "@material-ui/core";
import { useWindowDimensions } from './useWindowDimensions';
import { Transition } from 'react-transition-group';

const animationDuration = 200;

const useStyles = makeStyles(_theme => ({
    contentLarge: {
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: "20%",
        width: "500px"
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
        textAlign: "center",
        width: "500px"
    },
    title: {
        borderBottom: `5px solid ${theme.PALETTE_RED}`,
        marginBottom: "1rem",
        width: "max-content",
        wordWrap: "unset",
        [_theme.breakpoints.down('xs')]: {
            lineHeight: "3.5rem"
        },
        [_theme.breakpoints.up('sm')]: {
            lineHeight: "4rem"
        },
        [_theme.breakpoints.up('md')]: {
            lineHeight: "4.5rem"
        },
        [_theme.breakpoints.up('lg')]: {
            lineHeight: "5rem"
        },
    },
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
                    <Typography variant="h1" color="textPrimary" style={{ marginBottom: "0.25rem" }}>
                        Evan
                    </Typography>
                    <Typography variant="h1" color="textPrimary" className={classes.title}>
                        Thompson
                    </Typography>
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