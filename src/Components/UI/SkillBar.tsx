import * as React from "react";
import { styled, Box, LinearProgress, Typography, Grid } from "@mui/material";
import Image from "next/image";

interface Props {
    percentage: number;
    skillName: string;
    yearCount: number;
    iconPath: string;
    iconAlt: string;
}

export const SkillBar: React.FunctionComponent<Props> = (props) => {
    return (
        <Grid
            item
            xs={12}
            md={6}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box
                sx={{
                    minWidth: { xs: 35, sm: 45, md: 55, lg: 65 },
                    minHeight: { xs: 35, sm: 45, md: 55, lg: 65 },
                    position: "relative",
                    marginRight: "0.5rem"
                }}
            >
                <Image
                    src={props.iconPath}
                    alt={props.iconAlt}
                    fill
                    sizes="70px"
                />
            </Box>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h4" color="text.primaryDark">
                        {props.skillName}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: "0.75rem", sm: "1rem" },
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="body1"
                            color="text.secondaryDark"
                        >{`${props.yearCount} yr${
                            props.yearCount != 1 ? "s" : ""
                        }`}</Typography>
                        <Typography
                            variant="h4"
                            color="text.primaryDark"
                        >{`${props.percentage}%`}</Typography>
                    </Box>
                </Box>
                <LinearProgress
                    variant="determinate"
                    value={props.percentage}
                    sx={{
                        height: "2vw",
                        borderRadius: "1vw",
                        backgroundColor: "text.secondary",
                        "& .MuiLinearProgress-bar": {
                            borderRadius: "5px"
                        }
                    }}
                />
            </Box>
        </Grid>
    );
};
