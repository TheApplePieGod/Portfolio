import React from 'react';
import { makeStyles } from "@material-ui/core";
import * as theme from '../theme';
import { useHistory, useLocation } from 'react-router-dom';
import { useWindowDimensions } from './useWindowDimensions';
import { Transition } from 'react-transition-group';

const animationDuration = 100;

const useStyles = makeStyles({
    rootColumn: {
        position: "fixed",
        zIndex: 50,
        height: "100%",
        width: "120px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        //alignItems: "center",
        marginLeft: "2%"
    },
    rootRow: {
        position: "fixed",
        zIndex: 50,
        bottom: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        //alignItems: "center",
    },
    circleColumn: {
        WebkitBorderRadius: "40px 40px",
        borderRadius: "40px/40px",
        border: `solid 1px ${theme.PALETTE_DARK_WHITE}`,
        width: "40px",
        height: "40px",
        marginBottom: "30px",
        transition: `background-color ${animationDuration}ms ease-in-out`,
    },
    circleRow: {
        WebkitBorderRadius: "40px 40px",
        borderRadius: "40px/40px",
        border: `solid 1px ${theme.PALETTE_DARK_WHITE}`,
        width: "40px",
        height: "40px",
        marginRight: "30px",
        transition: `background-color ${animationDuration}ms ease-in-out`,
    }
});

export const Sidebar = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const { height, width } = useWindowDimensions();

    const [animationState, setAnimationState] = React.useState(location.pathname.includes("/more"));
    const [selected, setSelected] = React.useState(0);

    const circleTransitionStyles: any = {
        entering: { opacity: 1 },
        entered:  { opacity: 0, maxWidth: width <= 1200 ? "" : 0 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 1 },
    };

    const circleSelectedStyles: any = {
        entering: { backgroundColor: "rgba(0,0,0,0)" },
        entered:  { backgroundColor: theme.PALETTE_WHITE },
        exiting:  { backgroundColor: theme.PALETTE_WHITE },
        exited:  { backgroundColor: "rgba(0,0,0,0)" },
    };

    const updateSelection = (location: any) => {
        if (location.pathname == '/')
            setSelected(0)
        else if (location.pathname.startsWith("/about"))
            setSelected(1)
        else if (location.pathname.startsWith("/projects"))
            setSelected(2)
        else if (location.pathname == "/contact")
            setSelected(3)
        else
            setSelected(4)
    }

    React.useEffect(() => {
        updateSelection(location);
        return history.listen((location) => {
            setAnimationState(location.pathname.includes("/more"));
            updateSelection(location);
        });
    }, [history])

    return (
        <Transition
                timeout={animationDuration}
                in={animationState}
                //appear={true}
        >
            {state => (
                <div className={width <= 1200 ? classes.rootRow : classes.rootColumn} style={{ transition: `opacity ${animationDuration}ms ease-in-out`, ...circleTransitionStyles[state] }}>
                    <Transition timeout={animationDuration} in={selected == 0}>{selectState => (
                        <div onClick={() => history.push('/')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}></div>
                    )}</Transition>
                    <Transition timeout={animationDuration} in={selected == 1}>{selectState => (
                        <div onClick={() => history.push('/about')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}></div>
                    )}</Transition>
                    <Transition timeout={animationDuration} in={selected == 2}>{selectState => (
                        <div onClick={() => history.push('/projects')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}></div>
                    )}</Transition>
                    <Transition timeout={animationDuration} in={selected == 3}>{selectState => (
                        <div onClick={() => history.push('/contact')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState], marginBottom: 0, marginRight: 0 }}></div>
                    )}</Transition>
                </div>
            )}
        </Transition>
    );
}