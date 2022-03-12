import * as React from "react";
import { Box } from "@mui/material";
import { PageHeader } from "./PageHeader";
import { Navbar } from "./Navbar";

export const PageWrapper: React.FunctionComponent = (props) => {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <PageHeader />
            <Navbar />
            <Box
                sx={{ // Background image overlay
                    position: "absolute",
                    zIndex: -20,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    backgroundImage: "url(images/background-nomoon.jpg)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: 1,
                    transition: theme => theme.transitions.create('opacity', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.shorter
                    })
                }}
            />
            <main>
                {props.children}
            </main>
        </Box>
    );
}