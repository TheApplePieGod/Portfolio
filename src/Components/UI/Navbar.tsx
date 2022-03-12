import * as React from "react";
import { Box, List, ListItem, styled, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";

const HiddenA = styled("a")(
    ({ theme }) => `
        display: none;
    `
);

const NavCircle = styled(ListItem)(
    ({ theme }) => `
        ${theme.breakpoints.up('sm')} {
            border-radius: 40px 40px;
            width: 40px;
            height: 40px;
        }
        ${theme.breakpoints.down('sm')} {
            border-radius: 30px 30px;
            width: 30px;
            height: 30px;
        }
        border: 1px solid ${theme.palette.text.secondary};
        padding: 0px;
        transition: ${theme.transitions.create('background-color', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest
        })};
    `
);

export const Navbar: React.FunctionComponent = (props) => {
    const theme = useTheme();
    const router = useRouter();
    const condense = useMediaQuery(theme.breakpoints.down("lg"));

    // Include the hidden 'a' element for SEO optimization
    const renderNavItem = (route: string, exact: boolean, name: string) => {
        const selected = exact ? route == router.pathname : router.pathname.startsWith(route);

        return (
            <NavCircle
                onClick={() => router.push(route)}
                sx={{
                    backgroundColor: selected ? "text.primary" : "rgba(0,0,0,0)"
                }}
            >
                <HiddenA href={route} target="_self">{name}</HiddenA>
            </NavCircle>
        );
    }

    return (
        <nav aria-label="main">
            <List
                sx={{
                    position: "fixed",
                    zIndex: 50,
                    justifyContent: "center",
                    display: "flex",
                    gap: "25px",
                    listStyleType: "none",
                    marginBlock: "unset",
                    paddingBlock: "unset",
                    paddingInline: "unset",
                    ...(condense ? {
                        bottom: 0,
                        width: "100%",
                        height: { xs: 50, sm: 60 },
                        flexDirection: "row"
                    } : {
                        top: 0,
                        height: "100%",
                        width: "max-content",
                        flexDirection: "column",
                        marginLeft: "2%"
                    })
                }}
            >
                {renderNavItem("/", true, "Home")}
                {renderNavItem("/about", true, "About")}
                {renderNavItem("/projects", true, "Projects")}
                {renderNavItem("/homelab", true, "Homelab")}
                {renderNavItem("/contact", true, "Contact")}
            </List>
        </nav>
    );
}