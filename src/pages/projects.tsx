import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";

const ProjectsPage = () => {
    const expanded = useAppSelector(state => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="Projects | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Projects"
                }}
            />
            <Box>
                <Section
                    title="Projects"
                    subtitle="Take a look at some of the notable projects I have created and been involved with over the years"
                    buttonText="EXPLORE"
                    imagePath="/images/projects.jpg"
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

export default ProjectsPage;