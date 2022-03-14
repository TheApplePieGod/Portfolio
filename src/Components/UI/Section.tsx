﻿import * as React from "react";
import { styled, Box, Fade, useTheme, useMediaQuery, Typography, Button, Slide } from "@mui/material";
import { PageTitle } from "./PageTitle";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setPageExpanded } from "../../Redux/PageExpandedSlice";
import { Transition } from "react-transition-group";

interface Props {
    title: string;
    subtitle: string;
    buttonText: string;
    imagePath: string;
}

export const Section: React.FunctionComponent<Props> = (props) => {
    const theme = useTheme();
    const condense = useMediaQuery(theme.breakpoints.down("lg"));
    const expanded = useAppSelector(state => state.pageExpanded);
    const dispatch = useAppDispatch();

    const expandPage = () => {
        dispatch(setPageExpanded(true));
    }

    React.useEffect(() => {
        return () => { dispatch(setPageExpanded(false)); }
    }, [])

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
                        ...(condense ? {
                            width: "100vw",
                            height: "85vh",
                            left: 0
                        } : {
                            left: "20vw",
                            width: "80vw",
                            height: "100vh"
                        })
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: "600px", lg: "100%" },
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row-reverse" },
                            alignItems: "center",
                            justifyContent: { xs: "center", lg: "left" }
                        }}
                    >
                        <Transition
                            in={expanded}
                            timeout={theme.transitions.duration.standard}
                        >
                            {expandedState => (
                                <Box
                                    sx={{
                                        width: { xs: "500px", lg: "100%" },
                                        position: "relative",
                                        zIndex: -3,
                                        "& span:nth-of-type(1)": {
                                            transition: theme => theme.transitions.create('border-radius', {
                                                easing: theme.transitions.easing.sharp,
                                                duration: theme.transitions.duration.standard
                                            })
                                        },
                                        transition: theme => theme.transitions.create(['margin', 'height', 'border-radius', 'max-width'], {
                                            easing: theme.transitions.easing.sharp,
                                            duration: theme.transitions.duration.standard
                                        }),
                                        ...({
                                            entering: {
                                                margin: { xs: "0 0 20px 0", lg: "0 8% 0 2%" },
                                                height: { xs: "25%", lg: "67%" },
                                                maxWidth: { xs: "75%", lg: "100%" },
                                                "& span:first-of-type": {
                                                    borderRadius: { xs: "50px", lg: "100px" },
                                                }
                                            },
                                            entered: {
                                                margin: { xs: "0 0 20px 0", lg: "0 0 0 2%" },
                                                height: { xs: "25%", lg: "100%" },
                                                maxWidth: { xs: "75%", lg: "100%" },
                                                "& span:first-of-type": {
                                                    borderRadius: { xs: "50px", lg: 0 }
                                                }
                                            },
                                            exiting: {
                                                margin: { xs: "0 0 20px 0", lg: "0 0 0 2%" },
                                                height: { xs: "25%", lg: "100%" },
                                                maxWidth: { xs: "75%", lg: "100%" },
                                                "& span:first-of-type": {
                                                    borderRadius: { xs: "50px", lg: 0 }
                                                }
                                            },
                                            exited: {
                                                margin: { xs: "0 0 20px 0", lg: "0 8% 0 2%" },
                                                height: { xs: "25%", lg: "67%" },
                                                maxWidth: { xs: "75%", lg: "100%" },
                                                "& span:first-of-type": {
                                                    borderRadius: { xs: "50px", lg: "100px" },
                                                }
                                            },
                                            unmounted: {}
                                        }[expandedState])
                                    }}>
                                    <Image
                                        src={props.imagePath}
                                        alt={props.title}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                    />
                                </Box>
                            )}
                        </Transition>
                        <Box
                            sx={{
                                width: "500px",
                                minWidth: { xs: 0, lg: "500px" },
                                maxWidth: "75vw"
                            }}
                        >
                            <PageTitle>{props.title}</PageTitle>
                            <Typography
                                variant="h5"
                                color="textSecondary"
                                sx={{
                                    lineHeight: { xs: "30px", sm: "40px" },
                                    wordBreak: "break-word",
                                    whiteSpace: "pre-wrap"
                                }}
                            >
                                {props.subtitle}
                            </Typography>
                            <br />
                            {props.buttonText != "" &&
                                <Transition
                                    in={expanded}
                                    timeout={theme.transitions.duration.standard}
                                >
                                    {expandedState => (
                                        <Button
                                            sx={{
                                                transition: theme => theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color', 'opacity'], {
                                                    easing: theme.transitions.easing.sharp,
                                                    duration: theme.transitions.duration.standard
                                                }),
                                                ...({
                                                    entering: { opacity: 1.0 },
                                                    entered: { opacity: 0.0 },
                                                    exiting: { opacity: 0.0 },
                                                    exited: { opacity: 1.0 },
                                                    unmounted: {}
                                                }[expandedState])
                                            }}
                                            disabled={expanded}
                                            onClick={expandPage}
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            {props.buttonText}
                                        </Button>
                                    )}
                                </Transition>
                            }
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
                        top: { xs: "calc(100% - 75px)", sm: "calc(100% - 105px)", md: "calc(100% - 115px)" },
                        marginLeft: { xs: 0, sm: "-8px" },
                        left: 0
                    }}
                >
                    <Box sx={{ transform: "rotate(-90deg)" }}>
                        <Typography variant="h4">Scroll</Typography>
                        <Typography variant="h4">{"<====="}</Typography>
                    </Box>
                </Box>
            </Slide>
        </React.Fragment>
    );
}