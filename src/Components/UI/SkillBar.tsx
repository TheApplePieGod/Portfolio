import * as React from "react";
import { Box, LinearProgress, Typography, Grid } from "@mui/material";
import { TechIcon, TechIconType } from "./TechIcon";

interface Props {
    value: number;
    skillName: string;
    yearCount: number;
    iconType: TechIconType;
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
                justifyContent: "center",
                gap: "0.5rem"
            }}
        >
            <TechIcon type={props.iconType} />
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
                        >{`${props.value}/5`}</Typography>
                    </Box>
                </Box>
                <LinearProgress
                    variant="determinate"
                    value={(props.value / 5) * 100}
                    sx={{
                        height: { xs: "4vw", md: "2vw" },
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
