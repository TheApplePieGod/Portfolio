import { makeStyles, Typography, Button, Link } from "@material-ui/core"
import React from "react"
import { CircleLine } from "./circleLine"
import * as theme from '../theme';
import { SimpleDialog } from "./simpleDialog";

const useStyles = makeStyles({
    content: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    image: {
        marginTop: "10px",
        borderRadius: "20px",
        height: "20vh",
        objectFit: "fill"
    }
});

interface _props {
    width: number;
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

export const ProjectElement: React.FunctionComponent<_props> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const condense = props.width < 1200;

    return (
        <React.Fragment>
            <div className={classes.content} style={{ width: (condense || props.fullWidth) ? "80%" : "35%", margin: "0 3% 0 3%" }}>
                <Typography variant="h4" style={{ color: theme.PALETTE_BLACK }}>{props.title}</Typography>
                <CircleLine circleCount={props.circleCount} />
                {props.imageName != "" && <img src={`images/projects/${props.imageName}`} alt={props.title} className={classes.image} width={"100%"} /> }
                <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK, lineHeight: "40px", margin: "10px 0 10px 0" }}>{props.description}</Typography>
                <Button onClick={() => setOpen(true)} variant="contained" color="primary" size="small">SEE MORE</Button>
            </div>
            <SimpleDialog open={open} title={props.title} onClose={() => setOpen(false)} style={{ color: theme.PALETTE_BLACK }}>
                <Typography variant="body1" style={{ color: theme.PALETTE_LIGHT_BLACK, lineHeight: "40px", margin: "10px 0 10px 0" }}>
                    {props.type != "" && <><b>Type:</b> {props.type} <br /></>}
                    {props.languages != "" && <><b>Focuses:</b> {props.languages} <br /></>}
                    {props.screenshotPaths.length > 0 && <><b>Screenshots:</b>  <br /></> }
                    {props.link != "" && <><b>Link:</b> <Link href={props.link} target="_blank" underline="always">{props.link}</Link> <br /></>}
                    {props.github != "" && <><b>Github:</b> <Link href={props.github} target="_blank" underline="always">{props.github}</Link> <br /></>}
                </Typography>
                {props.children}
            </SimpleDialog>
        </React.Fragment>
    );
}