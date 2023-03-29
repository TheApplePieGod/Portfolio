import { Tooltip, TooltipProps, Typography } from "@mui/material";
import * as React from "react";

interface Props {
    text?: string;
    children: React.ReactElement<any, any>;
    tooltip?: Omit<TooltipProps, "title" | "children">;
}

export const StyledTooltip = (props: Props) => (
    <Tooltip
        enterTouchDelay={0}
        leaveTouchDelay={3000}
        {...props.tooltip}
        title={
            props.text && (
                <Typography variant="subtitle1">{props.text}</Typography>
            )
        }
    >
        {props.children}
    </Tooltip>
);
