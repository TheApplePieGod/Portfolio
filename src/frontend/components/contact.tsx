import { Button, Paper, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useWindowDimensions } from './useWindowDimensions';

const useStyles = makeStyles(theme => ({
    content: {
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: "20%",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%"
    },
    line: {
        position: "relative",
        zIndex: -1,
        marginTop: "-20px",
        marginBottom: "20px",
        [theme.breakpoints.down('xs')]: {
            clipPath: "inset(0px 255px 0px 0px)"
        },
        [theme.breakpoints.up('sm')]: {
            clipPath: "inset(0px 170px 0px 0px)"
        },
        [theme.breakpoints.up('md')]: {
            clipPath: "inset(0px 125px 0px 0px)"
        },
        [theme.breakpoints.up('lg')]: {
            clipPath: "inset(0px 85px 0px 0px)"
        },
    },
    image: {
        position: "relative",
        zIndex: -3,
        borderRadius: "100px",
        objectFit: "cover"
    }
}));

export const Contact = () => {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    return (
        <div>
            <div className={classes.content}>
                <div style={{ width: "min-content", maxWidth: "75vw" }}>
                    {(width <= 1200) &&
                        <img src="images/contact.jpg" className={classes.image} style={{ marginBottom: "30px" }} width={`100%`} height={height/2.5} />
                    }
                    <Typography variant="h1" color="textPrimary">Contact</Typography>
                    <img src="images/line.png" width={500} className={classes.line} />
                    <Typography variant="h5" color="textSecondary" style={{ lineHeight: "40px", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                        get in touch with me
                    </Typography>
                    <br />
                </div>
                {(width > 1200) &&
                    <div style={{ margin: "0 8% 0 -5%", minWidth: "500px", maxWidth: "1000px" }}>
                        <img src="images/contact.jpg" className={classes.image} width={`100%`} height={height/1.5} />
                    </div>
                }
            </div>
        </div>
    );
}