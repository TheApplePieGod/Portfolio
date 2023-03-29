import * as React from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import { TechIcon, TechIconType } from "./TechIcon";
import { GitHub } from "@mui/icons-material";

interface Props {
    techs: TechIconType[];
    link: string;
    github: string;
    title: string;
    imageName: string;
    description: string;
}

const _ProjectElement: React.FunctionComponent<Props> = (props) => {
    const { techs } = props;

    const renderTechs = () => {
        if (techs.length == 0) return;

        const elems: JSX.Element[] = [];

        for (let i = 0; i < techs.length; i++) {
            elems.push(
                <React.Fragment key={i}>
                    <TechIcon sizeScalar={0.75} type={techs[i]} tooltip />
                    {i != techs.length - 1 && (
                        <Typography variant="h3">·</Typography>
                    )}
                </React.Fragment>
            );
        }

        return elems;
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "2rem",
                    //height: { xs: "600px", md: "400px" },
                    height: "max-content",
                    width: "90%",
                    borderRadius: "20px",
                    padding: "1.5rem",
                    background:
                        "linear-gradient(90deg, rgba(44,42,48,0.95) 0%, rgba(66,63,73,0.95) 50%, rgba(44,42,48,0.95) 100%)",
                    border: (theme) =>
                        `5px solid ${theme.palette.text.primaryDark}`
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                        //flexShrink: 2
                    }}
                >
                    <Image
                        src={`/images/projects/${props.imageName}`}
                        style={{
                            borderRadius: "20px",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }}
                        alt={props.title}
                        sizes={`
                            (max-width: 900px) 80vw,
                            40vw
                        `}
                        width={1000}
                        height={500}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "0.75rem",
                            gap: "0.75rem"
                        }}
                    >
                        <Typography variant="h3">{props.title}</Typography>
                        {props.link && (
                            <Link
                                href={props.link}
                                target="_blank"
                                height={"24px"}
                            >
                                <LaunchIcon sx={{ color: "text.secondary" }} />
                            </Link>
                        )}
                        {props.github && (
                            <Link
                                href={props.github}
                                target="_blank"
                                height={"24px"}
                            >
                                <GitHub sx={{ color: "text.secondary" }} />
                            </Link>
                        )}
                    </Box>
                    <Typography variant="body1">{props.description}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: "1rem"
                        }}
                    >
                        {renderTechs()}
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export const ProjectElement = React.memo(_ProjectElement);
