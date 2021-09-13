import { Button, Paper, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useWindowDimensions } from './useWindowDimensions';
import { useHistory, useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const loadAnimationDuration = 200;
const expandAnimationDuration = 300;

const useStyles = makeStyles(theme => ({
    contentLarge: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
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
        top: "50%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        display: "flex",
        alignItems: "center",
        //justifyContent: "center",
        maxWidth: "100%",
        height: "100%",
        overflowX: "hidden"
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
    image: {
        position: "relative",
        zIndex: -3,
        objectFit: "cover",
        transition: `clip-path ${loadAnimationDuration}ms ease-in-out, height ${loadAnimationDuration}ms ease-in-out, border-radius ${loadAnimationDuration}ms ease-in-out`,
    },
    imageContainer: {
        minWidth: "500px",
        transition: `margin ${expandAnimationDuration}ms ease-in-out, max-width ${expandAnimationDuration}ms ease-in-out`
    },
    textContent: {
        width: "min-content",
        maxWidth: "75vw",
        transition: `opacity ${loadAnimationDuration}ms ease-in-out`,
    },
    scrollArrow: {
        transition: `opacity ${expandAnimationDuration}ms ease-in-out`,
        position: "absolute",
        transform: "rotate(-90deg)",
        top: "calc(100% - 115px)",
        left: 0,
        marginLeft: "-8px"
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

    const textTransitionStyles: any = {
        entering: { opacity: 0 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 0 },
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
        entering: { margin: "0 8% 0 -4%", maxWidth: "1000px" },
        entered:  { margin: "0 0 0 -4%", maxWidth: "100vw" },
        exiting:  { margin: "0 0 0 -4%", maxWidth: "100vw" },
        exited:  { margin: "0 8% 0 -4%", maxWidth: "1000px" },
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
                            <div className={width <= 1200 ? classes.contentSmall : classes.contentLarge}>
                                <div className={classes.textContent} style={{ ...textTransitionStyles[enterState], height: width <= 1200 ? 600 : 350 }}>
                                    {(width <= 1200 && props.imagePath != "") &&
                                        <img src={props.imagePath} className={classes.image} style={{ marginBottom: "30px", ...imageTransitionStyles[enterState] }} width={`100%`} height={height/4} />
                                    }
                                    <Typography variant="h1" color="textPrimary">{props.title}</Typography>
                                    <img src="images/line.png" width={500} className={props.lineClass ?? classes.line} />
                                    <Typography variant="h5" color="textSecondary" style={{ lineHeight: "40px", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                                        {props.subtitle}
                                    </Typography>
                                    <br />
                                    {(props.buttonText != "" && !expanded) &&
                                        <Button onClick={() => history.push(props.buttonPath)} variant="contained" color="primary" size="small">{props.buttonText}</Button>
                                    }
                                    {props.children}
                                </div>
                                {(width > 1200 && props.imagePath != "") &&
                                    <div className={classes.imageContainer} style={{ ...marginTransitionStyles[expandState] }}>
                                        <img src={props.imagePath} className={classes.image} width={`100%`} height={expanded ? height : height/1.5} style={{ ...imageTransitionStyles[enterState], ...moreTransitionStyles[expandState] }} />
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