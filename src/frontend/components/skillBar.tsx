import { LinearProgress, withStyles, createStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useWindowDimensions } from './useWindowDimensions';
import * as theme from '../theme';

interface _props {
    width: number;
    percentage: number;
    skillName: string;
    yearCount: number;
    iconPath: string;
    padRight?: boolean;
}

const CustomLinearProgress = withStyles((_theme) =>
  createStyles({
    root: {
      height: "2vw",
      borderRadius: "1vw",
    },
    colorPrimary: {
      backgroundColor: theme.PALETTE_DARK_WHITE,
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.PALETTE_RED,
    },
  }),
)(LinearProgress);

export const SkillBar = (props: _props) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: props.padRight ? "5%" : 0 }}>
            <img src={props.iconPath} alt={props.skillName} width={props.width/15} height={props.width/15} style={{ marginRight: "10px" }} />
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h4" style={{ color: theme.PALETTE_BLACK }}>{props.skillName}</Typography>
                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                      <Typography variant="h5" style={{ color: theme.PALETTE_DARK_DARK_WHITE }}>{`${props.yearCount} yr${props.yearCount != 1 ? 's' : ''}`}</Typography>
                      <Typography variant="h4" style={{ color: theme.PALETTE_BLACK }}>{`${props.percentage}%`}</Typography>
                    </div>
                </div>
                <CustomLinearProgress variant="determinate" value={props.percentage} style={{ width: props.width < 1000 ? "80vw" : "35vw" }} />
            </div>
        </div>
    );
}