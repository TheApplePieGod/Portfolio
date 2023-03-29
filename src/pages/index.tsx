import * as React from "react";
import { Box, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NextSeo } from "next-seo";
import { PageTitle } from "../Components/UI/PageTitle";

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
                        top: "50vh",
                        width: "500px",
                        ...(condense
                            ? {
                                  left: "50vw",
                                  transform: "translate(-50%, -50%)",
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "column",
                                  textAlign: "center"
                              }
                            : {
                                  transform: "translateY(-50%)",
                                  left: "20vw"
                              })
                    }}
                >
                    <Typography
                        variant="h1"
                        color="textPrimary"
                        sx={{ marginBottom: "0.25rem" }}
                    >
                        Evan
                    </Typography>
                    <PageTitle>Thompson</PageTitle>
                    <Typography
                        variant="h5"
                        color="textSecondary"
                        sx={{
                            lineHeight: { xs: "30px", sm: "40px" },
                            fontSize: {
                                xs: "1.2rem",
                                sm: "1.5rem"
                            }
                        }}
                    >
                        programmer
                        <br />
                        web engineer
                        <br />
                        game dev
                    </Typography>
                </Box>
            </Fade>
        </React.Fragment>
    );
};

export default HomePage;
