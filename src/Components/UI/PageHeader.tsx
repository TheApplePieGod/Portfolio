import * as React from "react";
import {
    styled,
    Box,
    Typography,
    Tooltip,
    IconButton,
    Button,
    useTheme,
    Grow
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setPageExpanded } from "../../Redux/PageExpandedSlice";
import Image from "next/image";
import { StyledTooltip } from "./StyledTooltip";
import { Description } from "@mui/icons-material";

export const PageHeader: React.FunctionComponent = (props) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const expanded = useAppSelector((state) => state.pageExpanded);

    return (
        <Box
            sx={{
                position: "fixed",
                zIndex: 50,
                top: 0,
                width: "100vw",
                opacity: 0.8,
                padding: { xs: "5px", sm: "8px", md: "11px", lg: "14px" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "background.default"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Grow
                    in={expanded}
                    timeout={theme.transitions.duration.standard}
                >
                    <Button
                        onClick={() => dispatch(setPageExpanded(false))}
                        sx={{
                            color: "text.primary",
                            marginTop: "-1px",
                            padding: "0 1% 0 10px",
                            backgroundColor: "unset",
                            borderRadius: 0,
                            minWidth: "max-content"
                        }}
                    >
                        <Typography variant="h5">← Go Back</Typography>
                    </Button>
                </Grow>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                }}
            >
                <StyledTooltip
                    text="Download my Resume"
                    tooltip={{
                        arrow: true,
                        placement: "bottom"
                    }}
                >
                    <IconButton
                        href="https://docs.google.com/document/d/1zdbwFxIaCQUuXHmoBpTn6jCCEeG8-5lV_tTDejP4sQs/export?format=pdf"
                        target="_blank"
                        sx={{
                            padding: 0
                        }}
                    >
                        <Description
                            sx={{
                                color: "text.primary",
                                width: { xs: 30, sm: 35, md: 40, lg: 45 },
                                height: { xs: 30, sm: 35, md: 40, lg: 45 }
                            }}
                        />
                    </IconButton>
                </StyledTooltip>
                <StyledTooltip
                    text="Built from scratch in React/Typescript on NextJS and deployed on Vercel"
                    tooltip={{
                        arrow: true,
                        placement: "bottom"
                    }}
                >
                    <InfoIcon
                        sx={{
                            padding: 0,
                            marginRight: "0.25rem",
                            width: { xs: 30, sm: 35, md: 40, lg: 45 },
                            height: { xs: 30, sm: 35, md: 40, lg: 45 }
                        }}
                    />
                </StyledTooltip>
                <IconButton
                    href="https://github.com/TheApplePieGod"
                    target="_blank"
                    sx={{
                        padding: 0,
                        width: { xs: 25, sm: 30, md: 35, lg: 40 },
                        height: { xs: 25, sm: 30, md: 35, lg: 40 }
                    }}
                >
                    <Image
                        src="/images/github.svg"
                        alt="Github Icon"
                        fill
                        sizes="50px"
                    />
                </IconButton>
            </Box>
        </Box>
    );
};
