﻿import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";

const AboutPage = () => {
    const expanded = useAppSelector(state => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="About | Evan Thompson's Portfolio"
                openGraph={{
                    title: "About"
                }}
            />
            <Box>
                <Section
                    title="About Me"
                    subtitle="I am a high school student with a passion for computer science"
                    buttonText="LEARN MORE"
                    imagePath="/images/about.jpg"
                />
                {expanded &&
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
                        <Box sx={{ height: "1000px" }} />
                    </Box>
                }
            </Box>
        </React.Fragment>
    );
}

export default AboutPage;