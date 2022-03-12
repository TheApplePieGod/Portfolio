import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";

const ABOUT_TEXT = `This is a template for a react/dotnet database driven webapp developed by TheApplePieGod.`;

const AboutPage = () => {
    return (
        <React.Fragment>
            <NextSeo
                title="About | Web Template"
                openGraph={{
                    title: "About"
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    marginTop: "4rem"
                }}
            >
                <Box sx={{ width: "fit-content" }}>
                    <Typography variant="h2">About</Typography>
                    <Divider />
                </Box>
                <Typography variant="subtitle1">{ABOUT_TEXT}</Typography>
            </Box>
        </React.Fragment>
    );
}

export default AboutPage;