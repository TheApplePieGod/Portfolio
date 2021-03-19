import React from "react";
import { useLocation } from "react-router";
import { Section } from "./section";
import { useWindowDimensions } from './useWindowDimensions';
import * as theme from '../theme';
import { Typography, makeStyles, IconButton } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(_theme => ({
    line: {
        position: "relative",
        zIndex: -1,
        marginTop: "-20px",
        marginBottom: "20px",
        [_theme.breakpoints.down('xs')]: {
            clipPath: "inset(0px 260px 0px 0px)"
        },
        [_theme.breakpoints.up('sm')]: {
            clipPath: "inset(0px 175px 0px 0px)"
        },
        [_theme.breakpoints.up('md')]: {
            clipPath: "inset(0px 130px 0px 0px)"
        },
        [_theme.breakpoints.up('lg')]: {
            clipPath: "inset(0px 90px 0px 0px)"
        },
    },
}));

export const Contact = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const condense = width < 1200;

    return (
        <div>
            <Section
                key="2"
                title="Contact"
                subtitle="get in touch with me"
                buttonText=""
                buttonPath=""
                imagePath="images/contact.jpg"
                basePath="/contact"
                lineClass={classes.line}
            >
                <div style={{ /*display: "flex", justifyContent: "center", alignItems: "center"*/ }}>
                    <IconButton href="mailto:evant.002@gmail.com" style={{ padding: 0 }}>
                        <MailOutlineIcon style={{ fontSize: "40px"}} />
                    </IconButton>
                </div>
            </Section>
        </div>
    );
}