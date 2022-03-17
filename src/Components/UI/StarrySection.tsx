import * as React from "react";
import { styled, Box, useMediaQuery, useTheme } from "@mui/material";

const StyledSection = styled("div")(
    ({ theme }) => `
        margin: 10px 0 10px 0;
        clip-path: polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%);
        background-image: url(images/background-nomoon.jpg);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 75px;
        padding-top: 75px;
        height: max-content;
        ${theme.breakpoints.up('xs')} {
            background-position: center;
        }
        ${theme.breakpoints.up('md')} {
            background-attachment: fixed;
            background-position: left;
            background-size: 100vw;
        }
    `
);

export const StarrySection: React.FunctionComponent = (props) => {
    const theme = useTheme();
    const parallax = useMediaQuery(theme.breakpoints.up("md"));
    const [scrollY, setScrollY] = React.useState(0);

    const onScroll = () => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        setScrollY(winScroll);
    }

    React.useEffect(() => {
        if (parallax) {
            window.addEventListener("scroll", onScroll);
            return () => {
                window.removeEventListener("scroll", onScroll);
            }
        }
    }, [parallax]);

    return (
        <StyledSection style={{ backgroundPositionY: parallax ? -scrollY * 0.25 : 0 }}>
            {props.children}
        </StyledSection>
    );
}