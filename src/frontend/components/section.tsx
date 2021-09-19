import { Button, Paper, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useWindowDimensions } from './useWindowDimensions';
import { useHistory, useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import * as theme from '../theme';

const loadAnimationDuration = 200;
const expandAnimationDuration = 300;

const useStyles = makeStyles(_theme => ({
    contentLarge: {
        position: "absolute",
        transform: "translateY(-50%)",
        top: "50%",
        left: "20vw",
        display: "flex",
        alignItems: "center",
        //justifyContent: "center",
        width: "100vw",
        height: "100%",
        overflowX: "hidden"
    },
    contentSmall: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50vw",
        display: "flex",
        alignItems: "center",
        //justifyContent: "center",
        maxWidth: "100vw",
        height: "80%",
        overflowX: "hidden"
    },
    line: {
        position: "relative",
        zIndex: -1,
        marginTop: "-20px",
        marginBottom: "20px",
        [_theme.breakpoints.down('xs')]: {
            clipPath: "inset(0px 225px 0px 0px)"
        },
        [_theme.breakpoints.up('sm')]: {
            clipPath: "inset(0px 125px 0px 0px)"
        },
        [_theme.breakpoints.up('md')]: {
            clipPath: "inset(0px 75px 0px 0px)"
        },
        [_theme.breakpoints.up('lg')]: {
            clipPath: "inset(0px 25px 0px 0px)"
        },
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
    image: {
        position: "relative",
        zIndex: -3,
        objectFit: "cover",
        transition: `clip-path ${loadAnimationDuration}ms ease-in-out, height ${expandAnimationDuration}ms ease-in-out, border-radius ${expandAnimationDuration}ms ease-in-out`,
    },
    imageContainer: {
        minWidth: "500px",
        transition: `margin ${expandAnimationDuration}ms ease-in-out, max-width ${expandAnimationDuration}ms ease-in-out`,
    },
    textContent: {
        width: "500px",
        maxWidth: "75vw",
        transition: `opacity ${loadAnimationDuration}ms ease-in-out`,
    },
    button: {
        transition: `opacity ${expandAnimationDuration}ms ease-in-out, color ${expandAnimationDuration}ms ease-in-out`,
    },
    scrollArrow: {
        transition: `opacity ${expandAnimationDuration}ms ease-in-out`,
        position: "absolute",
        transform: "rotate(-90deg)",
        [_theme.breakpoints.down('xs')]: {
            top: "calc(100% - 75px)",
            marginLeft: "0px"
        },
        [_theme.breakpoints.up('sm')]: {
            top: "calc(100% - 105px)",
            marginLeft: "-8px"
        },
        [_theme.breakpoints.up('md')]: {
            top: "calc(100% - 115px)",
            marginLeft: "-8px"
        },
        left: 0,
    }
}));

interface _props {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonPath: string;
    imagePath: string;
    basePath: string;
    lineClass?: string;
}

export const Section: React.FunctionComponent<_props> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const expanded = (location.pathname.match(/\//g) || []).length > 1;
    const condense = width <= 1400;
    const xxsmall = width <= 600;

    const textTransitionStyles: any = {
        entering: { opacity: 0 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 0 },
    };

    const buttonTransitionStyles: any = {
        entering: { opacity: 1 },
        entered:  { opacity: 0 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 1 },
    };

    const imageTransitionStyles: any = {
        entering: { clipPath: 'inset(50% 0 50% 0)' },
        entered:  { clipPath: 'inset(0 0 0 0)' },
        exiting:  { },
        exited:  { },
    };

    const moreTransitionStyles: any = {
        entering: { height: height/1.5, borderRadius: "100px" },
        entered:  { height: height, borderRadius: 0 },
        exiting:  { height: height, borderRadius: 0 },
        exited:  { height: height/1.5, borderRadius: "100px" },
    };

    const marginTransitionStyles: any = {
        entering: { margin: "0 8vw 0 2vw", maxWidth: "40vw" },
        entered:  { margin: "0 0 0 2vw", maxWidth: "100vw" },
        exiting:  { margin: "0 0 0 2vw", maxWidth: "100vw" },
        exited:  { margin: "0 8vw 0 2vw", maxWidth: "40vw" },
    };

    return (
        <Transition
            timeout={loadAnimationDuration}
            in={location.pathname.startsWith(props.basePath)}
            appear={true}
        >
            {enterState => (
                <Transition
                    timeout={expandAnimationDuration}
                    in={location.pathname.startsWith(props.basePath + '/more')}
                >
                    {expandState => (
                        <React.Fragment>
                            <div className={condense ? classes.contentSmall : classes.contentLarge}>
                                <div className={classes.textContent} style={{ ...textTransitionStyles[enterState], maxHeight: "100%", height: condense ? "600px" : "350px", minWidth: condense ? 0 : 500 }}>
                                    {(condense && props.imagePath != "") &&
                                        <img src={props.imagePath} alt={props.title} className={classes.image} style={{ marginBottom: "30px", ...imageTransitionStyles[enterState], borderRadius: "50px" }} width={`100%`} height={height/4} />
                                    }
                                    <Typography variant="h1" color="textPrimary" className={classes.title}>{props.title}</Typography>
                                    <Typography variant="h5" color="textSecondary" style={{ lineHeight: xxsmall ? "30px" : "40px", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                                        {props.subtitle}
                                    </Typography>
                                    <br />
                                    {props.buttonText != "" &&
                                        <Button
                                            style={{ ...buttonTransitionStyles[expandState] }}
                                            className={classes.button}
                                            disabled={expanded}
                                            onClick={() => history.push(props.buttonPath)}
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            {props.buttonText}
                                        </Button>
                                    }
                                    {props.children}
                                </div>
                                {(!condense && props.imagePath != "") &&
                                    <div className={classes.imageContainer} style={{ ...marginTransitionStyles[expandState] }}>
                                        <img src={props.imagePath} alt={props.title} className={classes.image} width={`100%`} height={expanded ? height : height/1.5} style={{ ...imageTransitionStyles[enterState], ...moreTransitionStyles[expandState] }} />
                                    </div>
                                }
                            </div>
                            <div className={classes.scrollArrow} style={{ ...textTransitionStyles[expandState] }}>
                                <Typography variant="h4" color="textPrimary">Scroll</Typography>
                                <Typography variant="h4" color="textPrimary">{"<====="}</Typography>
                            </div>
                        </React.Fragment>
                    )}
                </Transition>
            )}
        </Transition>
    );
}