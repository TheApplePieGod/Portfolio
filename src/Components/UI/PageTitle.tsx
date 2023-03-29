import { styled, Typography, TypographyProps } from "@mui/material";

export const PageTitle = styled((p: TypographyProps) => (
    <Typography {...p} variant="h1" />
))(
    ({ theme }) => `
        border-bottom: 5px solid ${theme.palette.primary.main};
        margin-bottom: 1rem;
        width: max-content;
        word-wrap: unset;
        ${theme.breakpoints.up("xs")} {
            line-height: 3.5rem;
        }
        ${theme.breakpoints.up("sm")} {
            line-height: 4rem;
        }
        ${theme.breakpoints.up("md")} {
            line-height: 4.5rem;
        }
        ${theme.breakpoints.up("lg")} {
            line-height: 5rem;
        }
    `
);
