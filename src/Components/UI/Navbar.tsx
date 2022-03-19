import * as React from "react";
import { Box, List, ListItem, styled, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useAppSelector } from "../../Redux/Hooks";

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

interface NavRoute {
    route: string;
    exact: boolean;
    name: string;
}

const NAV_ROUTES: NavRoute[] = [
    { route: "/", exact: true, name: "Home" },
    { route: "/about", exact: true, name: "About" },
    { route: "/projects", exact: true, name: "Projects" },
    { route: "/homelab", exact: true, name: "Homelab" },
    { route: "/contact", exact: true, name: "Contact" }
] 

export const Navbar: React.FunctionComponent = (props) => {
    const theme = useTheme();
    const router = useRouter();
    const condense = useMediaQuery(theme.breakpoints.down("lg"));
    const expanded = useAppSelector(state => state.pageExpanded);
    const [scrollDisabled, setScrollDisabled] = React.useState(false);

    const isRouteSelected = React.useCallback((route: string, exact: boolean) => {
        return exact ? route == router.pathname : router.pathname.startsWith(route);
    }, [router]);

    // + up, - down
    const onScroll = React.useCallback((e: WheelEvent) => {
        if (Math.abs(e.deltaY) < 3) return;

        const currentRouteIndex = NAV_ROUTES.findIndex(e => isRouteSelected(e.route, e.exact));
        if (currentRouteIndex != -1) {
            if (e.deltaY < 0 && currentRouteIndex > 0)
                router.push(NAV_ROUTES[currentRouteIndex - 1].route);
            else if (e.deltaY > 0 && currentRouteIndex < NAV_ROUTES.length - 1)
                router.push(NAV_ROUTES[currentRouteIndex + 1].route);
        }

        setScrollDisabled(true);
        setTimeout(() => setScrollDisabled(false), 200);
    }, [router, isRouteSelected]);

    React.useEffect(() => {
        if (!expanded && !scrollDisabled) {
            window.addEventListener("wheel", onScroll);
            return () => {
                window.removeEventListener("wheel", onScroll);
            }
        }
    }, [expanded, onScroll, scrollDisabled]);

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
                        width: "100vw",
                        height: { xs: 50, sm: 60 },
                        flexDirection: "row"
                    } : {
                        top: 0,
                        height: "100vh",
                        width: "max-content",
                        flexDirection: "column",
                        marginLeft: "2vw"
                    })
                }}
            >
                {
                    NAV_ROUTES.map((e, i) => {
                        const selected = isRouteSelected(e.route, e.exact);

                        return (
                            <NavCircle
                                key={i}
                                onClick={() => router.push(e.route)}
                                sx={{
                                    backgroundColor: selected ? "text.primary" : "rgba(0,0,0,0)"
                                }}
                            >
                                <HiddenA href={e.route} target="_self">{e.name}</HiddenA>
                            </NavCircle>
                        );
                    })
                }
            </List>
        </nav>
    );
}