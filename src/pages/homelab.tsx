import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Section } from "../Components/UI/Section";
import { useAppSelector } from "../Redux/Hooks";

const HomelabPage = () => {
    const expanded = useAppSelector(state => state.pageExpanded);

    return (
        <React.Fragment>
            <NextSeo
                title="Homelab | Evan Thompson's Portfolio"
                openGraph={{
                    title: "Homelab"
                }}
            />
            <Box>
                <Section
                    title="Homelab"
                    subtitle="Take a journey through the datacenter style services I setup inside my own home"
                    buttonText="TOUR"
                    imagePath="/images/homelab.png"
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

export default HomelabPage;