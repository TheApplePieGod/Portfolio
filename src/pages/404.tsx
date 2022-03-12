import * as React from "react";
import { Box, Typography } from "@mui/material";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <NextSeo
                title="404 | Web Template"
                openGraph={{
                    title: "Page Not Found"
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
                <Typography variant="h2">404 Cannot find the page you are looking for.</Typography>
            </Box>
        </React.Fragment>
    );
}

export default NotFoundPage;