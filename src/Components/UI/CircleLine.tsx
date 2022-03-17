import * as React from "react";
import { styled, Box } from "@mui/material";

interface Props {
    count: number;
}

const XS_SIZE = "11px";
const SM_SIZE = "14px";
const MD_SIZE = "15px";
const LG_SIZE = "17px";

const GetCircleStyles = (size: string) => (
    `
        border-radius: ${size}/${size};
        width: ${size};
        height: ${size};
    `
);

const Circle = styled("div")(
    ({ theme }) => `
        border: 1px solid ${theme.palette.text.secondaryDark};
        ${theme.breakpoints.up('xs')} { ${GetCircleStyles(XS_SIZE)} }
        ${theme.breakpoints.up('sm')} { ${GetCircleStyles(SM_SIZE)} }
        ${theme.breakpoints.up('md')} { ${GetCircleStyles(MD_SIZE)} }
        ${theme.breakpoints.up('lg')} { ${GetCircleStyles(LG_SIZE)} }
    `
);

export const CircleLine: React.FunctionComponent<Props> = (props) => {
    const renderCircles = () => {
        let values: JSX.Element[] = [];
        for (let i = 0; i < props.count; i++) {
            values.push(
                <Circle key={i} />
            );
        }
        return values;
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: XS_SIZE, sm: SM_SIZE, md: MD_SIZE, lg: LG_SIZE }
            }}
        >
            {renderCircles()}
        </Box>
    );
}