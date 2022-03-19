import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <NextSeo
                title="404 | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Page Not Found"
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
                <Typography variant="h2">404</Typography>
                <Typography variant="subtitle1">Cannot find the page you are looking for.</Typography>
            </Box>
        </React.Fragment>
    );
}

export default NotFoundPage;