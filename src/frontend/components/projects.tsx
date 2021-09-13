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
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "65px",
        paddingBottom: "100px"
    },
    starSection: {
        height: "150px",
        margin: "50px 0 75px 0",
        clipPath: "polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%)",
        backgroundImage: "url(images/background-nomoon.jpg)",
        width: "100vw",

        // no parallax
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',

        // parallax
        backgroundAttachment: "fixed",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
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
                            fullWidth
                            width={width}
                            circleCount={10}
                            type="Web app"
                            languages="ReactJS, Typescript, CSS, C#, SQL, Azure"
                            screenshotPaths={[]}
                            imageName=""
                            link=""
                            github=""
                            title="Echelon Dashboard"
                            description="I was accepted for a professional internship with Echelon Consulting, where I focused on the full life cycle of application development for the cloud. One other intern and I built an application from the ground up, which tightly integrates with Echelon's commercial time and expense system. It allows Echelon's leadership team to view various aspects of their business in near-real time, including company utilization, individual utilization, individual project health, and client sales distribution. The application is in active use and continues to evolve."
                        />
                    </div>
                    <div className={classes.starSection}></div>
                    <div style={{ display: "flex", alignItems: condense ? "center" : "baseline", justifyContent: "center", flexDirection: condense ? "column" : "row", gap: condense ? "2rem" : "0px" }}>
                        <ProjectElement
                            width={width}
                            circleCount={7}
                            type="Web app"
                            languages="ReactJS, Typescript"
                            screenshotPaths={[]}
                            imageName="bandersnatch.png"
                            link="https://bchess.site/"
                            github="https://github.com/TheApplePieGod/Bandersnatch"
                            title="Bandersnatch"
                            description="A chess playing engine built from scratch, powered by the browser for anyone to use and experiment with"
                        />
                        <ProjectElement
                            width={width}
                            circleCount={6}
                            type="Web app"
                            languages="ReactJS, Typescript, CSS, C#, SQL"
                            screenshotPaths={[]}
                            imageName="codecorner.png"
                            link="https://codecorner.azurewebsites.net/"
                            github=""
                            title="Code Corner"
                            description="My friend and I collaborated to create a website where users can complete and collaborate on programming-oriented challenges"
                        />
                        <ProjectElement
                            width={width}
                            circleCount={4}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            imageName="spade.png"
                            link="https://youtu.be/ChWMxhsLzy8"
                            github="https://github.com/TheApplePieGod/Spade"
                            title="Spade"
                            description="My second attempt at a 3D graphics engine. Built from scratch using DX11, I attempted to create a realistic planet which can be viewed from both space and on the surface in real time"
                        />
                    </div>
                    <div className={classes.starSection}></div>
                    <div style={{ display: "flex", alignItems: condense ? "center" : "baseline", justifyContent: "center", flexDirection: condense ? "column" : "row", gap: condense ? "2rem" : "0px" }}>
                        <ProjectElement
                            width={width}
                            circleCount={5}
                            type="Library"
                            languages="C++"
                            screenshotPaths={[]}
                            imageName="diamond.png"
                            link=""
                            github="https://github.com/TheApplePieGod/Diamond"
                            title="Diamond"
                            description="An open source, cross-platform, Vulkan-based 2D rendering/compute engine, which I hope to use in future projects and games"
                        />
                        <ProjectElement
                            width={width}
                            circleCount={11}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            imageName="particle-simulations.png"
                            link="https://youtu.be/XhlcFXmRxI8"
                            github="https://github.com/TheApplePieGod/ParticleSimulations"
                            title="Particle Simulations"
                            description="A collection of various 2D particle simulations powered by the Diamond engine."
                        />
                        <ProjectElement
                            width={width}
                            circleCount={5}
                            type="Console app"
                            languages="Python"
                            screenshotPaths={[]}
                            imageName="dropbot.png"
                            link=""
                            github="https://github.com/TheApplePieGod/DropBot"
                            title="DropBot"
                            description="A stock monitoring bot inspired by the boom of the graphics card market in late 2020"
                        />
                    </div>
                    <div className={classes.starSection}></div>
                    <div style={{ display: "flex", alignItems: condense ? "center" : "baseline", justifyContent: "center", flexDirection: condense ? "column" : "row", gap: condense ? "2rem" : "0px" }}>
                        <ProjectElement
                            width={width}
                            circleCount={6}
                            type="Web app"
                            languages="ReactJS, CSS, Typescript, C#, SQL"
                            screenshotPaths={[]}
                            imageName="ideacloud.png"
                            link="https://ideacloud.site/"
                            github=""
                            title="Idea Cloud"
                            description="A lightweight application to quickly store and look back at ideas that you find important. This is also the first app which I manually setup all of the hosting on a DigitalOcean droplet"
                        />
                        <ProjectElement
                            width={width}
                            circleCount={9}
                            type="Desktop app"
                            languages="C++"
                            screenshotPaths={[]}
                            imageName="depths-of-power.png"
                            link="https://youtu.be/a-77SkG5YqQ"
                            github="https://github.com/TheApplePieGod/DepthsOfPower"
                            title="Depths of Power"
                            description="A 2D game powered by Diamond. I have a vision for a automation focused 2D exploration game, and I have a basic prototype complete so far."
                        />
                    </div>
                </div>
            }
        </div>
    );
}