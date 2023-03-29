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
                <Tooltip
                    enterTouchDelay={0}
                    leaveTouchDelay={5000}
                    arrow
                    placement="bottom"
                    title={
                        <Typography variant="subtitle1">
                            Built from scratch in React/Typescript on NextJS and
                            deployed on Vercel
                        </Typography>
                    }
                >
                    <InfoIcon
                        sx={{
                            padding: 0,
                            width: { xs: 30, sm: 35, md: 40, lg: 45 },
                            height: { xs: 30, sm: 35, md: 40, lg: 45 }
                        }}
                    />
                </Tooltip>
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
