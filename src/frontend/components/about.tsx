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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    starSection: {
        minHeight: "800px",
        marginTop: "75px",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    interestRow: {
        display: "flex",
        aignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 3% 0 3%",
        paddingTop: "50px",
        marginBottom: "50px"
    }
});

export const About = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const condense = width < 1000;

    return (
        <div>
            <Section
                key="0"
                title="About Me"
                subtitle="i am a high school student with a passion for computer science"
                buttonText="LEARN MORE"
                buttonPath="/about/more"
                imagePath="images/about.jpg"
                basePath="/about"
            />
            {location.pathname.includes("/more") &&
                <div className={classes.content} style={{ top: "100%" }}>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Introduction</Typography>
                    <CircleLine circleCount={10} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px", flexDirection: condense ? "column" : "row" }}>
                        <img src="images/user.png" width={width/3} />
                        <br />
                        <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK, maxWidth: "50%", marginLeft: condense ? 0 : "75px", lineHeight: "40px" }}>
                            Born in the United States in 2003, I have spent most of my life traversing the world of computer science. I started programming at a very young age, and I have dabbled in some of the many different worlds of computer science. Game development, computer graphics, web design, and web development are a few of them that I have experience in.  
                        </Typography>
                    </div>
                    <div className={classes.starSection}>
                        <Typography variant="h3" color="textPrimary" style={{ marginTop: condense ? "20%" : "3%" }}>Interests</Typography>
                        <CircleLine circleCount={8} />
                        <div className={classes.interestRow} style={{ flexDirection: condense ? "column" : "row" }}>
                            <div style={{ margin: condense ? "auto" : "0 5% 0 0", width: condense ? "80%" : "35%" }}>
                                <ComputerIcon style={{ color: theme.PALETTE_WHITE, width: "15vw", height: "15vw" }} />
                                <Typography variant="body1" color="textSecondary" style={{ lineHeight: "40px" }}>
                                    Computers and technology are dominant in the modern world, and maintaining an understanding of how they work and operate is something I pride myself in
                                </Typography>
                            </div>
                            <br />
                            <br />
                            <div style={{ margin: condense ? "auto" : "0 5% 0 0", width: condense ? "80%" : "35%" }}>
                                <CodeIcon style={{ color: theme.PALETTE_WHITE, width: "15vw", height: "15vw" }} />
                                <Typography variant="body1" color="textSecondary" style={{ lineHeight: "40px" }}>
                                    The programs that drive computers to complete tasks and display information has always fascinated me and is something I have dedicated a lot of my life to
                                </Typography>
                            </div>
                            <br />
                            <br />
                            <div style={{ margin: "auto", width: condense ? "80%" : "35%" }}>
                                <CategoryIcon style={{ color: theme.PALETTE_WHITE, width: "15vw", height: "15vw" }} />
                                <Typography variant="body1" color="textSecondary" style={{ lineHeight: "40px" }}>
                                    Designing systems and models is always a daunting task when presented, but I love doing it and have done it countless times. Graphical design is not my strong suit, but I am learning
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <Typography variant="h3" style={{ color: theme.PALETTE_BLACK, marginTop: "65px" }}>Skills</Typography>
                    <CircleLine circleCount={5} />
                    <Typography variant="h5" style={{ color: theme.PALETTE_LIGHT_BLACK }}>Confidence</Typography>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "50px 0 100px 0", flexDirection: "column" }}>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                            <SkillBar width={width} percentage={90} skillName="ReactJS" iconPath="images/react.png" padRight={!condense} />
                            <br />
                            <SkillBar width={width} percentage={90} skillName="HTML/CSS" iconPath="images/csshtml.svg" />
                        </div>
                        <br />
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                            <SkillBar width={width} percentage={90} skillName="JS/Typescript" iconPath="images/typescript.png" padRight={!condense} />
                            <br />
                            <SkillBar width={width} percentage={90} skillName="C/C++" iconPath="images/cpp.svg" />
                        </div>
                        <br />
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                            <SkillBar width={width} percentage={80} skillName="C#/DotNet" iconPath="images/cs.svg" padRight={!condense} />
                            <br />
                            <SkillBar width={width} percentage={80} skillName="SQL" iconPath="images/sql.png" />
                        </div>
                        <br />
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                            <SkillBar width={width} percentage={70} skillName="Python" iconPath="images/python.png" padRight={!condense} />
                            <br />
                            <SkillBar width={width} percentage={50} skillName="Azure" iconPath="images/azure.png" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}