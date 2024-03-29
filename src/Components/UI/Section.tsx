﻿import * as React from "react";
import {
    styled,
    Box,
    Fade,
    useTheme,
    useMediaQuery,
    Typography,
    Button,
    Slide
} from "@mui/material";
import { PageTitle } from "./PageTitle";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setPageExpanded } from "../../Redux/PageExpandedSlice";
import { Transition } from "react-transition-group";

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    title: string;
    subtitle: string;
    buttonText: string;
    imagePath: string;
}

export const Section: React.FunctionComponent<Props> = (props) => {
    const theme = useTheme();
    const expanded = useAppSelector((state) => state.pageExpanded);
    const dispatch = useAppDispatch();

    const expandPage = () => {
        dispatch(setPageExpanded(true));
    };

    React.useEffect(() => {
        return () => {
            dispatch(setPageExpanded(false));
        };
    }, [dispatch]);

    return (
        <React.Fragment>
            <Fade
                in={true}
                appear
                timeout={theme.transitions.duration.standard}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: { xs: "100vw", lg: "80vw" },
                        height: { xs: "85vh", lg: "100vh" },
                        left: { xs: 0, lg: "20vw" },
                        pointerEvents: "none"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: "600px", lg: "100%" },
                            display: "flex",
                            left: 0,
                            flexDirection: { xs: "column", lg: "row-reverse" },
                            alignItems: "center",
                            justifyContent: { xs: "center", lg: "left" }
                        }}
                    >
                        <Transition
                            in={expanded}
                            timeout={theme.transitions.duration.standard}
                        >
                            {(expandedState) => (
                                <Transition
                                    in={true}
                                    timeout={{
                                        appear: 100,
                                        enter: theme.transitions.duration
                                            .standard
                                    }}
                                    appear
                                >
                                    {(loadState) => (
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "500px",
                                                    lg: "100%"
                                                },
                                                position: "relative",
                                                "& img:nth-of-type(1)": {
                                                    transition: (theme) =>
                                                        theme.transitions.create(
                                                            "border-radius",
                                                            {
                                                                easing: theme
                                                                    .transitions
                                                                    .easing
                                                                    .sharp,
                                                                duration:
                                                                    theme
                                                                        .transitions
                                                                        .duration
                                                                        .standard
                                                            }
                                                        )
                                                },
                                                transition: (theme) =>
                                                    theme.transitions.create(
                                                        [
                                                            "margin",
                                                            "height",
                                                            "border-radius",
                                                            "max-width"
                                                        ],
                                                        {
                                                            easing: theme
                                                                .transitions
                                                                .easing.sharp,
                                                            duration:
                                                                theme
                                                                    .transitions
                                                                    .duration
                                                                    .standard
                                                        }
                                                    ) +
                                                    "," +
                                                    theme.transitions.create(
                                                        "clip-path",
                                                        {
                                                            easing: theme
                                                                .transitions
                                                                .easing.sharp,
                                                            duration:
                                                                theme
                                                                    .transitions
                                                                    .duration
                                                                    .shortest
                                                        }
                                                    ),
                                                ...{
                                                    entering: {
                                                        margin: {
                                                            xs: "0 0 20px 0",
                                                            lg: "0 8% 0 2%"
                                                        },
                                                        height: {
                                                            xs: "25%",
                                                            sm: "40%",
                                                            lg: "67%"
                                                        },
                                                        maxWidth: {
                                                            xs: "75%",
                                                            lg: "100%"
                                                        },
                                                        "& img:first-of-type": {
                                                            borderRadius: {
                                                                xs: "50px",
                                                                lg: "100px"
                                                            }
                                                        }
                                                    },
                                                    entered: {
                                                        margin: {
                                                            xs: "0 0 20px 0",
                                                            lg: "0 0 0 2%"
                                                        },
                                                        height: {
                                                            xs: "25%",
                                                            sm: "40%",
                                                            lg: "100%"
                                                        },
                                                        maxWidth: {
                                                            xs: "75%",
                                                            lg: "100%"
                                                        },
                                                        "& img:first-of-type": {
                                                            borderRadius: {
                                                                xs: "50px",
                                                                lg: 0
                                                            }
                                                        }
                                                    },
                                                    exiting: {
                                                        margin: {
                                                            xs: "0 0 20px 0",
                                                            lg: "0 0 0 2%"
                                                        },
                                                        height: {
                                                            xs: "25%",
                                                            sm: "40%",
                                                            lg: "100%"
                                                        },
                                                        maxWidth: {
                                                            xs: "75%",
                                                            lg: "100%"
                                                        },
                                                        "& img:first-of-type": {
                                                            borderRadius: {
                                                                xs: "50px",
                                                                lg: 0
                                                            }
                                                        }
                                                    },
                                                    exited: {
                                                        margin: {
                                                            xs: "0 0 20px 0",
                                                            lg: "0 8% 0 2%"
                                                        },
                                                        height: {
                                                            xs: "25%",
                                                            sm: "40%",
                                                            lg: "67%"
                                                        },
                                                        maxWidth: {
                                                            xs: "75%",
                                                            lg: "100%"
                                                        },
                                                        "& img:first-of-type": {
                                                            borderRadius: {
                                                                xs: "50px",
                                                                lg: "100px"
                                                            }
                                                        }
                                                    },
                                                    unmounted: {}
                                                }[expandedState],
                                                ...{
                                                    entering: {
                                                        clipPath:
                                                            "inset(50% 0 50% 0)"
                                                    },
                                                    entered: {
                                                        clipPath:
                                                            "inset(0 0 0 0)"
                                                    },
                                                    exiting: {},
                                                    exited: {},
                                                    unmounted: {}
                                                }[loadState]
                                            }}
                                        >
                                            <Image
                                                src={props.imagePath}
                                                alt={props.title}
                                                style={{ objectFit: "cover" }}
                                                sizes="50vw"
                                                fill
                                                priority
                                            />
                                        </Box>
                                    )}
                                </Transition>
                            )}
                        </Transition>
                        <Box
                            sx={{
                                width: "500px",
                                minWidth: { xs: 0, lg: "500px" },
                                maxWidth: "75vw",
                                display: { xs: "flex", lg: "block" },
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Box>
                                <PageTitle>{props.title}</PageTitle>
                                <Typography
                                    variant="h5"
                                    color="textSecondary"
                                    sx={{
                                        lineHeight: { xs: "30px", sm: "40px" },
                                        fontSize: {
                                            xs: "1.2rem",
                                            sm: "1.5rem"
                                        },
                                        wordBreak: "break-word",
                                        whiteSpace: "pre-wrap",
                                        marginBottom: "1rem"
                                    }}
                                >
                                    {props.subtitle}
                                </Typography>
                            </Box>
                            {props.buttonText != "" && (
                                <Transition
                                    in={expanded}
                                    timeout={
                                        theme.transitions.duration.standard
                                    }
                                >
                                    {(expandedState) => (
                                        <Button
                                            sx={{
                                                transition: (theme) =>
                                                    theme.transitions.create(
                                                        [
                                                            "background-color",
                                                            "box-shadow",
                                                            "border-color",
                                                            "color",
                                                            "opacity"
                                                        ],
                                                        {
                                                            easing: theme
                                                                .transitions
                                                                .easing.sharp,
                                                            duration:
                                                                theme
                                                                    .transitions
                                                                    .duration
                                                                    .standard
                                                        }
                                                    ),
                                                ...{
                                                    entering: { opacity: 1.0 },
                                                    entered: { opacity: 0.0 },
                                                    exiting: { opacity: 0.0 },
                                                    exited: { opacity: 1.0 },
                                                    unmounted: {}
                                                }[expandedState],
                                                pointerEvents: "all",
                                                marginTop: {
                                                    xs: "1rem",
                                                    lg: 0
                                                },
                                                padding: "0.5rem 1rem",
                                                fontSize: {
                                                    xs: "1rem",
                                                    sm: "1.25rem"
                                                },
                                                backgroundColor:
                                                    "rgba(172, 14, 62, 0.04)",
                                                border: "1px solid #AC0E3EF0",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "rgba(172, 14, 62, 0.2)",
                                                    border: "1px solid #AC0E3EFF"
                                                }
                                            }}
                                            disabled={expanded}
                                            onClick={expandPage}
                                            variant="outlined"
                                            color="primary"
                                        >
                                            {props.buttonText}
                                        </Button>
                                    )}
                                </Transition>
                            )}
                            {props.children}
                        </Box>
                    </Box>
                </Box>
            </Fade>
            <Slide
                direction="up"
                in={expanded}
                timeout={theme.transitions.duration.standard}
                unmountOnExit
                mountOnEnter
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: {
                            xs: "calc(100% - 80px)",
                            sm: "calc(100% - 95px)"
                        },
                        marginLeft: "-8px",
                        left: 0
                    }}
                >
                    <Box
                        sx={{
                            transform: "rotate(-90deg)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography variant="h4">Scroll</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: "2rem",
                                fontSize: { xs: "3.5rem", sm: "4rem" }
                            }}
                        >
                            {"⟵"}
                        </Typography>
                    </Box>
                </Box>
            </Slide>
        </React.Fragment>
    );
};
