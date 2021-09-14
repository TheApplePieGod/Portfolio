import React from 'react';
import { makeStyles } from "@material-ui/core";
import * as theme from '../theme';
import { useHistory, useLocation } from 'react-router-dom';
import { useWindowDimensions } from './useWindowDimensions';
import { Transition } from 'react-transition-group';

const animationDuration = 100;

const useStyles = makeStyles({
    root: {
        position: "fixed",
        zIndex: 50,
        justifyContent: "center",
        display: "flex",
        listStyleType: "none",
        marginBlock: "unset",
        paddingBlock: "unset",
        paddingInline: "unset"
    },
    rootColumn: {
        height: "100%",
        width: "120px",
        flexDirection: "column",
        //alignItems: "center",
        marginLeft: "2%"
    },
    rootRow: {
        bottom: 0,
        width: "100vw",
        height: "60px",
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

    return ( // ul/li jank hopefully to improve SEO
        <Transition
                timeout={animationDuration}
                in={animationState}
                //appear={true}
        >
            {state => (
                <nav aria-label="site">
                    <ul className={`${classes.root} ${width <= 1200 ? classes.rootRow : classes.rootColumn}`} style={{ transition: `opacity ${animationDuration}ms ease-in-out`, ...circleTransitionStyles[state] }}>
                        <Transition timeout={animationDuration} in={selected == 0}>{selectState => (
                            <li onClick={() => history.push('/')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}>
                                <a href="/" target="_self" style={{ display: "none" }}>Home</a> 
                            </li>
                        )}</Transition>
                        <Transition timeout={animationDuration} in={selected == 1}>{selectState => (
                            <li onClick={() => history.push('/about')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}>
                                <a href="/about" target="_self" style={{ display: "none" }}>About</a> 
                            </li>
                        )}</Transition>
                        <Transition timeout={animationDuration} in={selected == 2}>{selectState => (
                            <li onClick={() => history.push('/projects')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState] }}>
                                <a href="/projects" target="_self" style={{ display: "none" }}>Projects</a> 
                            </li>
                        )}</Transition>
                        <Transition timeout={animationDuration} in={selected == 3}>{selectState => (
                            <li onClick={() => history.push('/contact')} className={width <= 1200 ? classes.circleRow : classes.circleColumn} style={{ ...circleSelectedStyles[selectState], marginBottom: 0, marginRight: 0 }}>
                                <a href="/contact" target="_self" style={{ display: "none" }}>Contact</a> 
                            </li>
                        )}</Transition>
                    </ul>
                </nav>
            )}
        </Transition>
    );
}