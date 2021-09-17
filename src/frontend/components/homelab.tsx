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
        paddingBottom: "8rem",
        top: "100%"
    },
    starSection: {
        //minHeight: "400px",
        marginTop: "75px",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "100px",
        height: "max-content"
    },
    parallax: {
        backgroundAttachment: "fixed",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: '100vw',
    },
    noParallax: {
        backgroundPosition: 'center',
    },
    bodyText: {
        lineHeight: "40px",
        marginTop: "20px",
        maxWidth: "80%"
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
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>The Base Layer</Typography>
                        <CircleLine circleCount={11} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            Velit laoreet id donec ultrices. Ut etiam sit amet nisl purus in mollis nunc. Nisl pretium fusce id velit ut tortor pretium viverra. Sapien faucibus et molestie ac feugiat sed lectus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Tempor nec feugiat nisl pretium fusce. Tincidunt ornare massa eget egestas purus viverra accumsan. Leo urna molestie at elementum eu facilisis sed odio. Bibendum neque egestas congue quisque egestas diam in. Vestibulum rhoncus est pellentesque elit.
                        </Typography>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Node Network</Typography>
                    <CircleLine circleCount={10} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>Cattle System</Typography>
                        <CircleLine circleCount={11} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            Velit laoreet id donec ultrices. Ut etiam sit amet nisl purus in mollis nunc. Nisl pretium fusce id velit ut tortor pretium viverra. Sapien faucibus et molestie ac feugiat sed lectus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Tempor nec feugiat nisl pretium fusce. Tincidunt ornare massa eget egestas purus viverra accumsan. Leo urna molestie at elementum eu facilisis sed odio. Bibendum neque egestas congue quisque egestas diam in. Vestibulum rhoncus est pellentesque elit.
                        </Typography>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Traffic Routing</Typography>
                    <CircleLine circleCount={10} />
                    <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK }} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit amet dictum. Luctus accumsan tortor posuere ac ut consequat semper. Sit amet venenatis urna cursus eget nunc scelerisque. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Amet dictum sit amet justo donec enim diam. Sapien eget mi proin sed libero enim. Etiam dignissim diam quis enim lobortis. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.
                    </Typography>
                    <div className={`${classes.starSection} ${condense ? classes.noParallax : classes.parallax}`}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>Minecraft Server</Typography>
                        <CircleLine circleCount={11} />
                        <Typography variant="body1" color="textSecondary" className={classes.bodyText}>
                            Velit laoreet id donec ultrices. Ut etiam sit amet nisl purus in mollis nunc. Nisl pretium fusce id velit ut tortor pretium viverra. Sapien faucibus et molestie ac feugiat sed lectus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Tempor nec feugiat nisl pretium fusce. Tincidunt ornare massa eget egestas purus viverra accumsan. Leo urna molestie at elementum eu facilisis sed odio. Bibendum neque egestas congue quisque egestas diam in. Vestibulum rhoncus est pellentesque elit.
                        </Typography>
                    </div>
                </div>
            }
        </div>
    );
}