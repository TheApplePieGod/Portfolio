import React from "react"
import { makeStyles } from "@material-ui/core";
import * as _theme from '../theme';

interface _props {
    circleCount: number
}

const xsSize = 11;
const smSize = 14;
const mdSize = 15;
const lgSize = 17;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        border: `solid 1px ${_theme.PALETTE_LIGHT_BLACK}`,
        [theme.breakpoints.down('xs')]: {
            WebkitBorderRadius: `${xsSize}px ${xsSize}px`,
            borderRadius: `${xsSize}px/${xsSize}px`,
            width: `${xsSize}px`,
            height: `${xsSize}px`,
            marginRight: `${xsSize}px`
        },
        [theme.breakpoints.up('sm')]: {
            WebkitBorderRadius: `${smSize}px ${smSize}px`,
            borderRadius: `${smSize}px/${smSize}px`,
            width: `${smSize}px`,
            height: `${smSize}px`,
            marginRight: `${smSize}px`
        },
        [theme.breakpoints.up('md')]: {
            WebkitBorderRadius: `${mdSize}px ${mdSize}px`,
            borderRadius: `${mdSize}px/${mdSize}px`,
            width: `${mdSize}px`,
            height: `${mdSize}px`,
            marginRight: `${mdSize}px`
        },
        [theme.breakpoints.up('lg')]: {
            WebkitBorderRadius: `${lgSize}px ${lgSize}px`,
            borderRadius: `${lgSize}px/${lgSize}px`,
            width: `${lgSize}px`,
            height: `${lgSize}px`,
            marginRight: `${lgSize}px`
        },
    }
}));

export const CircleLine = (props: _props) => {
    const classes = useStyles();

    const makeCircles = () => {
        let values: JSX.Element[] = [];
        for (let i = 0; i < props.circleCount; i++) {
            values.push(
                <div key={i} className={classes.circle} style={{ marginRight: i == props.circleCount - 1 ? 0 : "" }}></div>
            );
        }
        return values;
    }

    return (
        <div className={classes.root}>
            {makeCircles()}
        </div>
    );
} 