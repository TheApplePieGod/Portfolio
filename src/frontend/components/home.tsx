import { Button, Paper, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import React from 'react';
import * as theme from '../theme';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: "20%"
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
    }
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.content}>
                <Typography variant="h1" color="textPrimary">
                    Evan
                    <br/>
                    Thompson
                </Typography>
                <img src="images/line.png" width={500} className={classes.line} />
                <Typography variant="h5" color="textSecondary" style={{ lineHeight: "40px" }}>
                    programmer
                    <br/>
                    web engineer
                    <br />
                    game dev
                </Typography>
            </div>
        </div>
    );
}