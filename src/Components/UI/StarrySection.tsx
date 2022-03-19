import * as React from "react";
import { styled, Box, useMediaQuery, useTheme } from "@mui/material";

const StyledSection = styled("div")(
    ({ theme }) => `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: max-content;
    `
);

const StyledSectionStarry = styled(StyledSection)(
    ({ theme }) => `
        width: 100vw;
        margin: 10px 0 10px 0;
        clip-path: polygon(0 50px, 100% 0, 100% calc(100% - 50px), 0 100%);
        background-image: url(images/background-nomoon.jpg);
        padding-bottom: 75px;
        padding-top: 75px;
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

interface Props {
    disabled?: boolean;
}

export const StarrySection: React.FunctionComponent<Props> = (props) => {
    const theme = useTheme();
    const parallax = useMediaQuery(theme.breakpoints.up("md"));
    const [scrollY, setScrollY] = React.useState(0);

    const onScroll = () => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        setScrollY(winScroll);
    }

    React.useEffect(() => {
        if (parallax && !props.disabled) {
            window.addEventListener("scroll", onScroll);
            return () => {
                window.removeEventListener("scroll", onScroll);
            }
        }
    }, [parallax, props.disabled]);

    return (
        props.disabled ?
        <StyledSection>
            {props.children}
        </StyledSection>
        :
        <StyledSectionStarry style={{ backgroundPositionY: parallax ? -scrollY * 0.25 : 0 }}>
            {props.children}
        </StyledSectionStarry>
    );
}