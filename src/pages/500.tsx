import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";

const ErrorPage = () => {
    return (
        <React.Fragment>
            <NextSeo
                title="500 | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Server Error"
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    paddingTop: "6rem"
                }}
            >
                <Typography variant="h2">500</Typography>
                <Typography variant="subtitle1">An internal server error has occured.</Typography>
            </Box>
        </React.Fragment>
    );
}

export default ErrorPage;