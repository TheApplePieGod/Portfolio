import * as React from "react";
import { Box, Fade, useTheme } from "@mui/material";
import { PageHeader } from "./PageHeader";
import { Navbar } from "./Navbar";
import { useAppSelector } from "../../Redux/Hooks";

interface Props {
    children?: React.ReactNode | React.ReactNode[];
}

export const PageWrapper: React.FunctionComponent = (props: Props) => {
    const theme = useTheme();
    const expanded = useAppSelector((state) => state.pageExpanded);

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <PageHeader />
            <Fade in={!expanded} timeout={theme.transitions.duration.standard}>
                <Box sx={{ position: "fixed", zIndex: -20 }}>
                    <Navbar />
                    <Box
                        sx={{
                            // Background image overlay
                            position: "absolute",
                            width: "100vw",
                            height: "100vh",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                            backgroundImage:
                                "url(images/background-animated.webp)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                </Box>
            </Fade>
            <main>{props.children}</main>
        </Box>
    );
};
