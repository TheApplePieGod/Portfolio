import React from 'react';
import { Button, IconButton, makeStyles, SvgIcon, Tooltip, Typography } from "@material-ui/core";
import * as theme from '../theme';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useWindowDimensions } from './useWindowDimensions';
import { Transition } from 'react-transition-group';
import InfoIcon from "@material-ui/icons/Info";

const animationDuration = 200;

const useStyles = makeStyles({
    root: {
        position: "fixed",
        zIndex: 50,
        top: 0,
        width: "100vw",
        opacity: 0.8
    },
    content: {
        width: "100%",
        padding: "0px 10px 0 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.PALETTE_BLACK,
    },
    button: {
        transition: `opacity ${animationDuration}ms ease-in-out, color ${animationDuration}ms ease-in-out`,
        marginTop: "-1px",
        padding: "0 1% 0 10px",
        backgroundColor: theme.PALETTE_BLACK,
        "&:hover": {
            backgroundColor: theme.PALETTE_BLACK
        },
        borderRadius: 0,
        width: "150px"
    }
});

export const Header = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const { height, width } = useWindowDimensions();

    const [animationState, setAnimationState] = React.useState(location.pathname.includes("/more"));

    const arrowTransitionStyles: any = {
        entering: { opacity: 0 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 0 },
    };

    React.useEffect(() => {
        return history.listen((location) => {
            setAnimationState(location.pathname.includes("/more"));
        })
    }, [history])

    const goBack = () => {
        //history.goBack()
        let newURL = location.pathname.split('/');
        newURL.pop();
        history.push(newURL.join('/'));
    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Typography variant="h6" color="textPrimary">Portfolio</Typography>
                        <Tooltip
                            style={{ marginTop: "-0.1rem" }}
                            enterTouchDelay={0}
                            leaveTouchDelay={5000}
                            arrow
                            placement="bottom"
                            title={<Typography variant="body1">Built from scratch in React/Typescript and deployed on Netlify</Typography>}>
                            <InfoIcon style={{ color: "white" }} />
                        </Tooltip>
                    </div>
                    <Transition
                        timeout={animationDuration}
                        in={animationState}
                        //appear={true}
                    >
                        {state => (
                            <Button className={classes.button} onClick={goBack} disabled={!animationState} style={{ ...arrowTransitionStyles[state] }}>{"<===== Go Back"}</Button>
                        )}
                    </Transition>
                </div>
                <div style={{ marginRight: "10px" }}>
                    <IconButton aria-label="github" href="https://github.com/TheApplePieGod" target="_blank" style={{ color: theme.PALETTE_WHITE }}>
                        <img src="images/github.svg" alt="Github Icon" width={Math.max(width/40, 30)} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}