import * as React from "react";
import { styled, Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Link } from "@mui/material";
import { CircleLine } from "./CircleLine";
import Image from "next/image";

interface Props {
    fullWidth?: boolean;
    circleCount: number;
    type: string;
    languages: string;
    screenshotPaths: string[];
    link: string;
    github: string;
    title: string;
    imageName: string;
    description: string;
}

const _ProjectElement: React.FunctionComponent<Props> = (props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Grid
                item
                xs={10}
                md={props.fullWidth ? 10 : 5.4}
                lg={props.fullWidth ? 10 : 3.6}
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <Typography variant="h4" color="text.primaryDark">{props.title}</Typography>
                <CircleLine count={props.circleCount} />
                {props.imageName != "" &&
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: 150, sm: 250, md: 250, lg: 250 },
                            position: "relative",
                            marginTop: "10px",
                            "& span:first-of-type": {
                                borderRadius: "20px"
                            }
                        }}
                    >
                        <Image src={`/images/projects/${props.imageName}`} alt={props.title} layout="fill" objectFit="cover" />
                    </Box>
                }
                <Typography variant="body1" color="text.secondaryDark" sx={{ margin: "10px 0 10px 0" }}>{props.description}</Typography>
                <Button onClick={() => setOpen(true)} variant="contained" color="primary" size="small">SEE MORE</Button>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { backgroundColor: "text.primary" } }}>
                <DialogTitle color="text.primaryDark">{props.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" color="text.secondaryDark" sx={{ margin: "10px 0 10px 0" }}>
                        {props.type != "" && <><b>Type:</b> {props.type} <br /></>}
                        {props.languages != "" && <><b>Focuses:</b> {props.languages} <br /></>}
                        {props.screenshotPaths.length > 0 && <><b>Screenshots:</b>  <br /></> }
                        {props.link != "" && <><b>Link:</b> <Link href={props.link} target="_blank" underline="always">{props.link}</Link> <br /></>}
                        {props.github != "" && <><b>Github:</b> <Link href={props.github} target="_blank" underline="always">{props.github}</Link> <br /></>}
                    </Typography>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export const ProjectElement = React.memo(_ProjectElement);