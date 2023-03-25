import * as React from "react";
import {
    styled,
    Box,
    useTheme,
    useMediaQuery,
    Typography
} from "@mui/material";
import { CircleLine } from "./CircleLine";
import Image from "next/image";
import { StarrySection } from "./StarrySection";

const ComputerLight = styled("div")(
    ({ theme }) => `
        width: 26px;
        height: 26px;
        border-radius: 13px;
        filter: blur(2px);
    `
);

const ComputerVent = styled("div")(
    ({ theme }) => `
        width: 25px;
        height: 25px;
        border: 4px solid #5B57654D;
    `
);

const ComputerExtras: React.FunctionComponent = () => {
    const [colors, setColors] = React.useState([
        "radial-gradient(circle, rgba(255,213,213,1) 0%, rgba(254,150,150,1) 3%, rgba(252,0,0,1) 100%)",
        "radial-gradient(circle, rgba(213,255,215,1) 0%, rgba(150,254,151,1) 3%, rgba(90,252,0,1) 100%)",
        "radial-gradient(circle, rgba(255,253,213,1) 0%, rgba(254,253,150,1) 3%, rgba(252,249,0,1) 100%)"
    ]);
    const [lightCount, setLightCount] = React.useState(
        Math.trunc(Math.random() * 2) + 1
    );

    const mapLights = () => {
        let elements: JSX.Element[] = [];
        for (let i = 0; i < lightCount; i++) {
            elements.push(
                <ComputerLight key={colors[i]} sx={{ background: colors[i] }} />
            );
        }
        return elements;
    };

    const ventRow = () => {
        let elements: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            elements.push(<ComputerVent key={i} />);
        }
        return <Box sx={{ display: "flex", gap: "4px" }}>{elements}</Box>;
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    position: "absolute",
                    left: "30px",
                    top: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                }}
            >
                {ventRow()}
                {ventRow()}
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "30px",
                    top: "10px",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: "20px",
                    opacity: "0.3"
                }}
            >
                <Image src="/images/port1.svg" alt="" width={70} height={70} />
                <Image
                    src="/images/port2.svg"
                    alt=""
                    width={100}
                    height={100}
                />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "30px",
                    bottom: "14px",
                    display: "flex",
                    gap: "10px",
                    opacity: "0.8"
                }}
            >
                {mapLights()}
            </Box>
        </React.Fragment>
    );
};

interface ContentImage {
    path: string;
    subtitle: string;
}

interface Props {
    starry?: boolean;
    title: string;
    circleCount: number;
    content: string;
    images?: ContentImage[];
}

export const ComputerCell: React.FunctionComponent<Props> = (props) => {
    const theme = useTheme();
    const condense = useMediaQuery(theme.breakpoints.down("md"));

    const starryEnabled = props.starry && condense;
    const lightText = starryEnabled || !condense;

    return (
        <StarrySection disabled={!starryEnabled}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "20px", md: "50px" },
                    ...(!condense && {
                        width: "calc(100% - 80px)",
                        border: `5px solid ${theme.palette.text.primaryDark}`,
                        borderRadius: "50px 50px 50px 50px",

                        position: "relative",
                        marginTop: "-5px"
                    })
                }}
            >
                <Typography
                    variant="h3"
                    color={lightText ? "text.primary" : "text.primaryDark"}
                    sx={{ zIndex: 2, whiteSpace: "nowrap" }}
                >
                    {props.title}
                </Typography>
                <CircleLine count={props.circleCount} />
                <Typography
                    variant="body1"
                    color={lightText ? "text.secondary" : "text.secondaryDark"}
                    sx={{ marginTop: "10px" }}
                >
                    {props.content}
                </Typography>
                <Box
                    sx={{
                        marginTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        gap: "0.5rem",
                        width: "100%"
                    }}
                >
                    {props.images?.map((e, i) => (
                        <React.Fragment key={i}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: {
                                        xs: 200,
                                        sm: 250,
                                        md: 300,
                                        lg: 350
                                    },
                                    position: "relative"
                                }}
                            >
                                <Image
                                    src={e.path}
                                    alt={e.subtitle}
                                    style={{ objectFit: "contain" }}
                                    sizes="90vw"
                                    fill
                                />
                            </Box>
                            <Typography
                                variant="subtitle1"
                                color={
                                    lightText
                                        ? "text.secondary"
                                        : "text.secondaryDark"
                                }
                                sx={{
                                    marginTop: "-0.25rem",
                                    marginBottom: "0.75rem",
                                    maxWidth: "80%"
                                }}
                            >
                                <b>{e.subtitle}</b>
                            </Typography>
                        </React.Fragment>
                    ))}
                </Box>
                {!condense && <ComputerExtras />}
            </Box>
        </StarrySection>
    );
};
