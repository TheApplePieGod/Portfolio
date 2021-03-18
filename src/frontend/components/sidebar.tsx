import React from 'react';
import { makeStyles } from "@material-ui/core";
import * as theme from '../theme';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        height: "100%",
        width: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        //alignItems: "center",
        marginLeft: "2%"
    },
    circle: {
        WebkitBorderRadius: "40px 40px",
        borderRadius: "40px/40px",
        border: `solid 1px ${theme.PALETTE_DARK_WHITE}`,
        width: "40px",
        height: "40px",
        marginBottom: "30px"
    }
});

export const Sidebar = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    return (
        (location.pathname.match(/\//g) || []).length == 1 ?
        <div className={classes.root}>
            <div onClick={() => history.push('/')} className={classes.circle} style={{ backgroundColor: location.pathname == '/' ? theme.PALETTE_WHITE : '' }}></div>
            <div onClick={() => history.push('/about')} className={classes.circle} style={{ backgroundColor: location.pathname == '/about' ? theme.PALETTE_WHITE : '' }}></div>
            <div onClick={() => history.push('/projects')} className={classes.circle} style={{ backgroundColor: location.pathname == '/projects' ? theme.PALETTE_WHITE : '' }}></div>
            <div onClick={() => history.push('/contact')} className={classes.circle} style={{ backgroundColor: location.pathname == '/contact' ? theme.PALETTE_WHITE : '', marginBottom: 0 }}></div>
        </div>
        : <div></div>
    );
}