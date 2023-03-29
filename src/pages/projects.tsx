﻿import * as React from "react";
import {
    styled,
    Box,
    Divider,
    Grid,
    Typography,
    TypographyProps,
    useTheme,
    IconButton,
    Tooltip,
    useMediaQuery
} from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { ProjectElement } from "../Components/UI/ProjectElement";
import { StarrySection } from "../Components/UI/StarrySection";
import { TechIconType } from "../Components/UI/TechIcon";
import { SwitchTransition, Transition } from "react-transition-group";
import { Autorenew } from "@mui/icons-material";

const TextSelected = (
    props: TypographyProps & {
        selected: boolean;
    }
) => (
    <Typography
        {...props}
        color={props.selected ? "text.primary" : "text.secondaryDark"}
        variant="h3"
        sx={{
            cursor: "pointer",
            borderBottom: (theme) =>
                `${props.selected ? 5 : 0}px solid ${
                    theme.palette.primary.main
                }`,
            transition: (theme) =>
                theme.transitions.create(["border", "color"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.standard
                })
        }}
    >
        {props.children}
    </Typography>
);

const ProjectsPage = () => {
    const expanded = useAppSelector((state) => state.pageExpanded);
    const theme = useTheme();
    const condense = useMediaQuery(theme.breakpoints.down("md"));
    const [personal, setPersonal] = React.useState(true);

    const renderStarrySection = (key?: string) => {
        return (
            <Grid item xs={12} key={key}>
                <StarrySection />
            </Grid>
        );
    };

    const renderProfessionalProjects = () => {
        const elements: React.ReactNode[] = [
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                imageName="echelon-dashboard.webp"
                link=""
                github=""
                title="Echelon Dashboard"
                key="Echelon Dashboard"
                description="I was accepted for a professional internship with Echelon Consulting, where I focused on the full life cycle of application development for the cloud. One other intern and I built an application from the ground up, which tightly integrates with Echelon's commercial time and expense system. It allows Echelon's leadership team to view various aspects of their business in near-real time, including company utilization, individual utilization, individual project health, and client sales distribution. The application is in active use and continues to evolve."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                imageName="echelon-website.png"
                link="https://www.echelon.org/"
                github=""
                title="Echelon Website"
                key="Echelon Website"
                description="Website"
            />
        ];

        return elements;
    };

    const renderHobbyProjects = () => {
        const elements: React.ReactNode[] = [
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                imageName="word-arena.png"
                link="https://wordarena.xyz/"
                github=""
                title="Word Arena"
                key="Word Arena"
                description="An online multiplayer-enhanced version of the popular word game Wordle filled with other cool, interactive, and customizable features."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp, TechIconType.Vulkan]}
                imageName="flourish.jpg"
                link=""
                github="https://github.com/TheApplePieGod/Flourish"
                title="Flourish"
                key="Flourish"
                description="An open source, cross-platform, rendering library that abstracts away the complexity of Vulkan and allows (coming soon) the option to switch to native Metal on MacOS devices."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp]}
                imageName="heart.webp"
                link=""
                github="https://github.com/TheApplePieGod/Heart"
                title="Heart"
                key="Heart"
                description="An open source, cross-platform, game engine that uses Flourish under the hood to render and supports numerous features such as PBR rendering, C# scripting, physics, and more."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss
                ]}
                imageName="bandersnatch.png"
                link="https://bchess.site/"
                github="https://github.com/TheApplePieGod/Bandersnatch"
                title="Bandersnatch"
                key="Bandersnatch"
                description="A chess playing engine built from scratch, powered by the browser for anyone to use and experiment with."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                imageName="codecorner.png"
                link="https://codecorner.azurewebsites.net/"
                github=""
                title="Code Corner"
                key="Code Corner"
                description="My friend and I collaborated to create a website where users can complete and collaborate on programming-oriented challenges."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp]}
                imageName="spade.png"
                link="https://youtu.be/ChWMxhsLzy8"
                github="https://github.com/TheApplePieGod/Spade"
                title="Spade"
                key="Spade"
                description="My second attempt at a 3D graphics engine. Built from scratch using DX11, I attempted to create a realistic planet which can be viewed from both space and on the surface in real time."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp, TechIconType.Vulkan]}
                imageName="diamond.png"
                link=""
                github="https://github.com/TheApplePieGod/Diamond"
                title="Diamond"
                key="Diamond"
                description="An open source, cross-platform, Vulkan-based 2D rendering/compute engine, which I hope to use in future projects and games."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp]}
                imageName="particle-simulations.png"
                link="https://youtu.be/XhlcFXmRxI8"
                github="https://github.com/TheApplePieGod/ParticleSimulations"
                title="Particle Sims"
                key="Particle Sims"
                description="A collection of various 2D particle simulations powered by the Diamond engine."
            />,
            <ProjectElement
                techs={[TechIconType.Python]}
                imageName="dropbot.png"
                link=""
                github="https://github.com/TheApplePieGod/DropBot"
                title="DropBot"
                key="DropBot"
                description="A stock monitoring bot inspired by the boom of the graphics card market in late 2020."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp,
                    TechIconType.SQL
                ]}
                imageName="ideacloud.png"
                link="https://ideacloud.site/"
                github=""
                title="Idea Cloud"
                key="Idea Cloud"
                description="A lightweight application to quickly store and look back at ideas that you find important. This is also the first app which I manually setup all of the hosting on a DigitalOcean droplet."
            />,
            <ProjectElement
                techs={[TechIconType.Cpp]}
                imageName="depths-of-power.png"
                link="https://youtu.be/a-77SkG5YqQ"
                github="https://github.com/TheApplePieGod/DepthsOfPower"
                title="Depths of Power"
                key="Depths of Power"
                description="A 2D game powered by Diamond. I have a vision for a automation focused 2D exploration game, and I have a basic prototype complete so far."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss
                ]}
                imageName="game-manager.png"
                link=""
                github="https://github.com/TheApplePieGod/GameManager"
                title="Game Manager"
                key="Game Manager"
                description="An electron-powered app used to interface over the internet with minecraft servers running on the homelab in my house."
            />,
            <ProjectElement
                techs={[
                    TechIconType.React,
                    TechIconType.TS,
                    TechIconType.HTMLCss,
                    TechIconType.CSharp
                ]}
                imageName="sql-dev.png"
                link=""
                github="https://github.com/TheApplePieGod/SQLDev"
                title="SQL Dev"
                key="SQL Dev"
                description="An electron-powered app I created to assist the development process of writing SQL functions and integrating them with C#."
            />,
            <ProjectElement
                techs={[TechIconType.CSharp, TechIconType.SQL]}
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
                    imagePath="/images/projects.webp"
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
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1.5rem"
                                }}
                            >
                                {!condense && (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            height: "50px"
                                        }}
                                    >
                                        <TextSelected
                                            selected={personal}
                                            onClick={() => setPersonal(true)}
                                        >
                                            Personal
                                        </TextSelected>
                                        <Typography variant="h3">|</Typography>
                                        <TextSelected
                                            selected={!personal}
                                            onClick={() => setPersonal(false)}
                                        >
                                            Professional
                                        </TextSelected>
                                    </Box>
                                )}
                                <SwitchTransition mode="out-in">
                                    <Transition
                                        key={personal ? "personal" : "pro"}
                                        timeout={200}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        {(transitionState) => (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    transition: (theme) =>
                                                        theme.transitions.create(
                                                            ["opacity"],
                                                            {
                                                                easing: theme
                                                                    .transitions
                                                                    .easing
                                                                    .sharp,
                                                                duration: 400
                                                            }
                                                        ),
                                                    opacity:
                                                        transitionState ==
                                                        "entered"
                                                            ? 1
                                                            : 0
                                                }}
                                            >
                                                {condense && (
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center"
                                                        }}
                                                    >
                                                        <TextSelected
                                                            selected={true}
                                                            onClick={() =>
                                                                setPersonal(
                                                                    true
                                                                )
                                                            }
                                                        >
                                                            {personal
                                                                ? "Personal"
                                                                : "Professional"}
                                                        </TextSelected>
                                                        <Tooltip
                                                            arrow
                                                            title={`Switch to ${
                                                                personal
                                                                    ? "Professional"
                                                                    : "Personal"
                                                            } projects`}
                                                        >
                                                            <IconButton
                                                                onClick={() =>
                                                                    setPersonal(
                                                                        !personal
                                                                    )
                                                                }
                                                                size="large"
                                                            >
                                                                <Autorenew
                                                                    sx={{
                                                                        color: "text.primary"
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Box>
                                                )}
                                                {personal
                                                    ? renderHobbyProjects()
                                                    : renderProfessionalProjects()}
                                            </Box>
                                        )}
                                    </Transition>
                                </SwitchTransition>

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
