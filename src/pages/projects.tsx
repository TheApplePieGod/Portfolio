import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { ProjectElement } from "../Components/UI/ProjectElement2";
import { StarrySection } from "../Components/UI/StarrySection";
import { TechIconType } from "../Components/UI/TechIcon";

const ProjectsPage = () => {
    const expanded = useAppSelector((state) => state.pageExpanded);

    const renderStarrySection = (key?: string) => {
        return (
            <Grid item xs={12} key={key}>
                <StarrySection />
            </Grid>
        );
    };

    const renderProjects = () => {
        const elements: React.ReactNode[] = [
            <ProjectElement
                circleCount={6}
                type="Web app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                screenshotPaths={[]}
                imageName="word-arena.png"
                link="https://wordarena.xyz/"
                github=""
                title="Word Arena"
                key="Word Arena"
                description="An online multiplayer-enhanced version of the popular word game Wordle filled with other cool, interactive, and customizable features."
            />,
            <ProjectElement
                circleCount={4}
                type="Library / Desktop App"
                techs={[TechIconType.Cpp]}
                screenshotPaths={[]}
                imageName="heart.png"
                link=""
                github="https://github.com/TheApplePieGod/Heart"
                title="Heart"
                key="Heart"
                description="An open source, cross-platform, game engine and api-agnostic rendering library that currently supports both OpenGL and Vulkan."
            />,
            <ProjectElement
                circleCount={7}
                type="Web app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss
                ]}
                screenshotPaths={[]}
                imageName="bandersnatch.png"
                link="https://bchess.site/"
                github="https://github.com/TheApplePieGod/Bandersnatch"
                title="Bandersnatch"
                key="Bandersnatch"
                description="A chess playing engine built from scratch, powered by the browser for anyone to use and experiment with."
            />,
            <ProjectElement
                circleCount={6}
                type="Web app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                screenshotPaths={[]}
                imageName="codecorner.png"
                link="https://codecorner.azurewebsites.net/"
                github=""
                title="Code Corner"
                key="Code Corner"
                description="My friend and I collaborated to create a website where users can complete and collaborate on programming-oriented challenges."
            />,
            <ProjectElement
                circleCount={4}
                type="Desktop app"
                techs={[TechIconType.Cpp]}
                screenshotPaths={[]}
                imageName="spade.png"
                link="https://youtu.be/ChWMxhsLzy8"
                github="https://github.com/TheApplePieGod/Spade"
                title="Spade"
                key="Spade"
                description="My second attempt at a 3D graphics engine. Built from scratch using DX11, I attempted to create a realistic planet which can be viewed from both space and on the surface in real time."
            />,
            <ProjectElement
                circleCount={5}
                type="Library"
                techs={[TechIconType.Cpp]}
                screenshotPaths={[]}
                imageName="diamond.png"
                link=""
                github="https://github.com/TheApplePieGod/Diamond"
                title="Diamond"
                key="Diamond"
                description="An open source, cross-platform, Vulkan-based 2D rendering/compute engine, which I hope to use in future projects and games."
            />,
            <ProjectElement
                circleCount={8}
                type="Desktop app"
                techs={[TechIconType.Cpp]}
                screenshotPaths={[]}
                imageName="particle-simulations.png"
                link="https://youtu.be/XhlcFXmRxI8"
                github="https://github.com/TheApplePieGod/ParticleSimulations"
                title="Particle Sims"
                key="Particle Sims"
                description="A collection of various 2D particle simulations powered by the Diamond engine."
            />,
            <ProjectElement
                circleCount={5}
                type="Console app"
                techs={[TechIconType.Python]}
                screenshotPaths={[]}
                imageName="dropbot.png"
                link=""
                github="https://github.com/TheApplePieGod/DropBot"
                title="DropBot"
                key="DropBot"
                description="A stock monitoring bot inspired by the boom of the graphics card market in late 2020."
            />,
            <ProjectElement
                circleCount={6}
                type="Web app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                screenshotPaths={[]}
                imageName="ideacloud.png"
                link="https://ideacloud.site/"
                github=""
                title="Idea Cloud"
                key="Idea Cloud"
                description="A lightweight application to quickly store and look back at ideas that you find important. This is also the first app which I manually setup all of the hosting on a DigitalOcean droplet."
            />,
            <ProjectElement
                circleCount={9}
                type="Desktop app"
                techs={[TechIconType.Cpp]}
                screenshotPaths={[]}
                imageName="depths-of-power.png"
                link="https://youtu.be/a-77SkG5YqQ"
                github="https://github.com/TheApplePieGod/DepthsOfPower"
                title="Depths of Power"
                key="Depths of Power"
                description="A 2D game powered by Diamond. I have a vision for a automation focused 2D exploration game, and I have a basic prototype complete so far."
            />,
            <ProjectElement
                circleCount={9}
                type="Desktop app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss
                ]}
                screenshotPaths={[]}
                imageName="game-manager.png"
                link=""
                github="https://github.com/TheApplePieGod/GameManager"
                title="Game Manager"
                key="Game Manager"
                description="An electron-powered app used to interface over the internet with minecraft servers running on the homelab in my house."
            />,
            <ProjectElement
                circleCount={4}
                type="Desktop app"
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp
                ]}
                screenshotPaths={[]}
                imageName="sql-dev.png"
                link=""
                github="https://github.com/TheApplePieGod/SQLDev"
                title="SQL Dev"
                key="SQL Dev"
                description="An electron-powered app I created to assist the development process of writing SQL functions and integrating them with C#."
            />,
            <ProjectElement
                circleCount={6}
                type="Discord bot"
                techs={[TechIconType.CSharp, TechIconType.SQL]}
                screenshotPaths={[]}
                imageName="discord-bot.png"
                link=""
                github="https://github.com/TheApplePieGod/BigMoBot"
                title="Discord Bot"
                key="Discord Bot"
                description="A discord bot I wrote to track user activity in my friend group's discord along with other cool features."
            />
        ];

        return elements;
    };

    return (
        <React.Fragment>
            <NextSeo
                title="Projects | Evan Thompson's Portfolio"
                description="Some notable projects that I have created and been involved with over the years"
                openGraph={{
                    title: "Projects",
                    description:
                        "Some notable projects that I have created and been involved with over the years"
                }}
            />
            <Box>
                <Section
                    title="Projects"
                    subtitle="Take a look at some of the notable projects I have created and been involved with over the years"
                    buttonText="EXPLORE"
                    imagePath="/images/projects.jpg"
                />
                {expanded && (
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100vw",
                            top: "100%",
                            left: 0
                        }}
                    >
                        <StarrySection>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    alignItems: "center"
                                }}
                            >
                                {renderProjects()}

                                {/* Spacer */}
                                <Box sx={{ height: "150px" }} />
                            </Box>
                        </StarrySection>
                    </Box>
                )}
            </Box>
        </React.Fragment>
    );
};

export default ProjectsPage;
