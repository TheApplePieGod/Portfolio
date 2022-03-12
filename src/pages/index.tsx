import * as React from "react";
import { Box, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NextSeo } from "next-seo";

const HomePage = () => {
    const theme = useTheme();
    const condense = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <React.Fragment>
            <NextSeo
                title="Home | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Home"
                }}
            />
            <Fade
                appear
                in={true}
                timeout={theme.transitions.duration.standard}
            >
                <Box
                    sx={{
                        position: "fixed",
                        top: "50%",
                        width: "500px",
                        ...(condense ? {
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center"
                        } : {
                            transform: "translateY(-50%)",
                            left: "20%"
                        })
                    }}
                >
                    <Typography variant="h1" color="textPrimary" sx={{ marginBottom: "0.25rem" }}>
                        Evan
                    </Typography>
                    <Typography
                        variant="h1"
                        color="textPrimary"
                        sx={{
                            borderBottom: theme => `5px solid ${theme.palette.primary.main}`,
                            marginBottom: "1rem",
                            width: "max-content",
                            wordWrap: "unset",
                            lineHeight: { xs: "3.5rem", sm: "4rem", md: "4.5rem", lg: "5rem" }
                        }}
                    >
                        Thompson
                    </Typography>
                    <Typography variant="h5" color="textSecondary" sx={{ lineHeight: "40px" }}>
                        programmer
                        <br/>
                        web engineer
                        <br />
                        game dev
                    </Typography>
                </Box>
            </Fade>
        </React.Fragment>
    );
}

export default HomePage;