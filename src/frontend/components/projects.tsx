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
import { ProjectElement } from "./projectElement";

const useStyles = makeStyles({
    content: {
        backgroundColor: theme.PALETTE_WHITE,
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "65px",
        paddingBottom: "100px"
    },
    starSection: {
        height: "200px",
        margin: "50px 0 75px 0",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
    }
});

export const Projects = () => {
    const classes = useStyles();
    const location = useLocation();
    const { height, width } = useWindowDimensions();

    const condense = width < 1200;

    return (
        <div>
            <Section
                key="1"
                title="Projects"
                subtitle="take a look at some of the various projects i have created and been involved with over the years"
                buttonText="EXPLORE"
                buttonPath="/projects/more"
                imagePath="images/projects.jpg"
                basePath="/projects"
            />
            {location.pathname.includes("/more") &&
                <div className={classes.content} style={{ top: "100%" }}>
                    <div style={{ display: "flex", alignItems: condense ? "center" : "baseline", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                        <ProjectElement
                            width={width}
                            circleCount={10}
                            type="Web app"
                            languages="ReactJS, CSS, C#, SQL"
                            screenshotPaths={[]}
                            link=""
                            github=""
                            title="N/A"
                            description="N/A"
                        />
                        <br />
                        <br />
                        <ProjectElement
                            width={width}
                            circleCount={6}
                            type="Web app"
                            languages="ReactJS, CSS, C#, SQL"
                            screenshotPaths={[]}
                            link="https://codecorner.azurewebsites.net/"
                            github=""
                            title="Code Corner"
                            description="My friend and I collaborated to create a website where users can complete and collaborate on programming-oriented challenges"
                        />
                        <br />
                        <br />
                        <ProjectElement
                            width={width}
                            circleCount={4}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            link="https://www.youtube.com/watch?v=ChWMxhsLzy8"
                            github="https://github.com/TheApplePieGod/Spade"
                            title="Spade"
                            description="My second attempt at a 3D graphics engine. Built from scratch using DX11, I attempted to create a realistic planet which can be viewed from both space and on the surface in real time"
                        />
                        <br />
                        <br />
                    </div>
                    <div className={classes.starSection}></div>
                    <div style={{ display: "flex", alignItems: condense ? "center" : "baseline", justifyContent: "center", flexDirection: condense ? "column" : "row" }}>
                        <ProjectElement
                            width={width}
                            circleCount={5}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            link=""
                            github="https://github.com/TheApplePieGod/Diamond"
                            title="Diamond"
                            description="My first attempt at a Vulkan-based engine. It is designed to be used for 2D applications, which I hoped to use in future projects and games"
                        />
                        <br />
                        <br />
                        <ProjectElement
                            width={width}
                            circleCount={9}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            link=""
                            github="https://github.com/TheApplePieGod/DepthsOfPower"
                            title="Depths of Power"
                            description="My second attempt at a 2D game; powered by diamond. I had a vision for a automation focused 2D exploration game, but I have not made a ton of progress"
                        />
                        <br />
                        <br />
                        <ProjectElement
                            width={width}
                            circleCount={5}
                            type="Console app"
                            languages="Python"
                            screenshotPaths={[]}
                            link=""
                            github="https://github.com/TheApplePieGod/DropBot"
                            title="DropBot"
                            description="A stock monitoring bot inspired by the crash of the graphics card market in late 2020"
                        />
                        <br />
                        <br />
                    </div>
                </div>
            }
        </div>
    );
}