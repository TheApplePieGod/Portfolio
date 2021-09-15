import React from "react";
import { useLocation } from "react-router";
import { Section } from "./section";
import { useWindowDimensions } from './useWindowDimensions';
import * as theme from '../theme';
import { CircleLine } from "./circleLine";
import { Typography, makeStyles } from "@material-ui/core";
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import CategoryIcon from '@material-ui/icons/Category';
import { SkillBar } from "./skillBar";

const useStyles = makeStyles({
    content: {
        backgroundColor: theme.PALETTE_WHITE,
        position: "absolute",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: "100%"
    },
    starSection: {
        minHeight: "800px",
        marginTop: "75px",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: 'cover',
    },
    parallax: {
        backgroundAttachment: "fixed",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
    },
    noParallax: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    interestRow: {
        display: "flex",
        aignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 3% 0 3%",
        paddingTop: "50px",
        marginBottom: "50px"
    },
    skillSection: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem"
    }
});

export const Homelab = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const condense = width < 1000;

    return (
        <div>
            <Section
                key="0"
                title="Homelab"
                subtitle="take a journey through the datacenter style services i setup inside my own home"
                buttonText="TOUR"
                buttonPath="/homelab/more"
                imagePath="images/homelab.png"
                basePath="/homelab"
            />
            {location.pathname.includes("/more") &&
                <div className={classes.content}>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Introduction</Typography>
                    <CircleLine circleCount={10} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px", flexDirection: condense ? "column" : "row" }}>
                        <img src="images/user.png" width={width/3} alt="Generic User Image" />
                        <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK, maxWidth: condense ? "80%" : "50%", marginLeft: condense ? 0 : "75px", marginTop: "1rem", lineHeight: "40px" }}>
                            Test
                        </Typography>
                    </div>
                </div>
            }
        </div>
    );
}