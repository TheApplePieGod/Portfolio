import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";
import { CircleLine } from "../Components/UI/CircleLine";
import Image from "next/image";
import { StarrySection } from "../Components/UI/StarrySection";
import SvgIcon from "@mui/material/SvgIcon";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import CategoryIcon from "@mui/icons-material/Category";
import { SkillBar } from "../Components/UI/SkillBar";
import { TechIconType } from "../Components/UI/TechIcon";

const InterestBlock = (props: { text: string; icon: typeof SvgIcon }) => {
    return (
        <Box
            sx={{
                width: { xs: "90%", md: "35%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <props.icon
                sx={{
                    width: { xs: "30vw", md: "15vw" },
                    height: "auto",
                    marginBottom: "0.5rem"
                }}
            />
            <Typography variant="body1" color="textSecondary">
                {props.text}
            </Typography>
        </Box>
    );
};

const AboutPage = () => {
    const expanded = useAppSelector((state) => state.pageExpanded);
    const description =
        "I am an MIT student with a passion for computer science";

    return (
        <React.Fragment>
            <NextSeo
                title="About | Evan Thompson's Portfolio"
                description={description}
                openGraph={{
                    title: "About",
                    description: description
                }}
            />
            <Box>
                <Section
                    title="About Me"
                    subtitle={description}
                    buttonText="LEARN MORE"
                    imagePath="/images/about.webp"
                />
                {expanded && (
                    <Box
                        sx={{
                            backgroundColor: "text.primary",
                            position: "absolute",
                            left: 0,
                            width: "100vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            top: "100%"
                        }}
                    >
                        <Typography
                            variant="h3"
                            color="text.primaryDark"
                            sx={{ mt: "60px" }}
                        >
                            Introduction
                        </Typography>
                        <CircleLine count={10} />
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "1rem",
                                flexDirection: { xs: "column", md: "row" }
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        xs: 150,
                                        md: 200,
                                        lg: 250
                                    },
                                    height: {
                                        xs: 150,
                                        md: 200,
                                        lg: 250
                                    },
                                    position: "relative"
                                }}
                            >
                                <Image
                                    src="/images/user.webp"
                                    alt="Generic User Image"
                                    sizes="25vw"
                                    fill
                                />
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.secondaryDark"
                                sx={{
                                    maxWidth: { xs: "90%", md: "50%" },
                                    marginLeft: { xs: 0, md: "75px" },
                                    marginTop: { xs: "1rem", md: 0 }
                                }}
                            >
                                Born in Chicago in 2003, I have spent most of my
                                life traversing the world of computer science. I
                                started programming at a young age, and I have
                                dabbled in some of the many paradigms that
                                computer science has to offer. Game development,
                                computer graphics, web development, and
                                low-level programming are a few of them that I
                                am passionate about.
                            </Typography>
                        </Box>
                        <StarrySection>
                            <Typography variant="h3">Interests</Typography>
                            <CircleLine count={8} />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: { xs: "3rem", md: "4rem" },
                                    textAlign: "center",
                                    padding: "0 3% 0 3%",
                                    paddingTop: "1rem",
                                    marginBottom: "1rem"
                                }}
                            >
                                <InterestBlock
                                    text="Computers and technology are dominant in the modern world. Harnessing their power through visual feedback, whether that be through websites, games, or simulations, are primary drivers of my interest in computing."
                                    icon={ComputerIcon}
                                />
                                <InterestBlock
                                    text="Programming at both a high and low level is essential to being an informed programmer and writing efficient software. I am passionate about my work in both levels and everything in between."
                                    icon={CodeIcon}
                                />
                                <InterestBlock
                                    text="Designing systems and models is can seem like a daunting task when presented, but I love creating and have done it countless times. Knowing how to iterate on and debug these system are critical skills that I am always using and improving."
                                    icon={CategoryIcon}
                                />
                            </Box>
                        </StarrySection>
                        <Typography variant="h3" color="text.primaryDark">
                            Skills
                        </Typography>
                        <CircleLine count={5} />
                        <Typography
                            variant="h5"
                            color="text.secondaryDark"
                            sx={{ marginBottom: "40px" }}
                        >
                            Confidence
                        </Typography>
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            columnSpacing={6}
                            columns={12}
                            sx={{
                                padding: { xs: "0 30px", md: "0 60px" },
                                maxWidth: "1400px"
                            }}
                        >
                            <SkillBar
                                value={5}
                                yearCount={4}
                                skillName="ReactJS"
                                iconType={TechIconType.React}
                            />{" "}
                            {/* 2019 */}
                            <SkillBar
                                value={5}
                                yearCount={8}
                                skillName="HTML/CSS"
                                iconType={TechIconType.HTMLCss}
                            />{" "}
                            {/* 2015 */}
                            <SkillBar
                                value={5}
                                yearCount={7}
                                skillName="JS/TS"
                                iconType={TechIconType.TS}
                            />{" "}
                            {/* 2016 */}
                            <SkillBar
                                value={5}
                                yearCount={6}
                                skillName="C++"
                                iconType={TechIconType.Cpp}
                            />{" "}
                            {/* 2017 */}
                            <SkillBar
                                value={5}
                                yearCount={3}
                                skillName="Python"
                                iconType={TechIconType.Python}
                            />{" "}
                            {/* 2020 */}
                            <SkillBar
                                value={4}
                                yearCount={2}
                                skillName="Vulkan"
                                iconType={TechIconType.Vulkan}
                            />{" "}
                            {/* 2021 */}
                            <SkillBar
                                value={4}
                                yearCount={5}
                                skillName="C#/DotNet"
                                iconType={TechIconType.CSharp}
                            />{" "}
                            {/* 2018 */}
                            <SkillBar
                                value={4}
                                yearCount={4}
                                skillName="SQL"
                                iconType={TechIconType.SQL}
                            />{" "}
                            {/* 2019 */}
                            {/*
                                <SkillBar
                                    percentage={50}
                                    yearCount={3}
                                    skillName="Azure"
                                    iconType={TechIconType.Azure}
                                />{" "}
                                2020
                            */}
                        </Grid>

                        {/* Spacer */}
                        <Box sx={{ height: "150px" }} />
                    </Box>
                )}
            </Box>
        </React.Fragment>
    );
};

export default AboutPage;
