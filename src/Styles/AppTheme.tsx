import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { amber, blueGrey, deepOrange } from "@mui/material/colors";
import memoizeOne from "memoize-one";
import {
    Arvo,
    Asap,
    Asap_Condensed,
    Bebas_Neue,
    Changa,
    Josefin_Sans,
    Kanit,
    Martian_Mono,
    Space_Mono,
    Zilla_Slab
} from "next/font/google";

declare module "@mui/material/styles" {
    interface TypeText {
        primaryDark: string;
        secondaryDark: string;
    }

    // allow configuration using `createTheme`
    interface TypeTextOptions {
        primaryDark?: string;
        secondaryDark?: string;
    }
}

const headerFontFamily = Martian_Mono({ subsets: ["latin"] });
const bodyFontFamily = Changa({
    subsets: ["latin"],
    weight: ["400"]
});

// https://material.io/resources/color/
// https://mui.com/customization/palette/
// https://mui.com/customization/color/
export const createAppTheme = memoizeOne(() => {
    let theme = createTheme({
        palette: {
            primary: {
                main: "#AC0E3E"
            },
            secondary: {
                main: deepOrange[500]
            },
            error: {
                main: "#AC0E3E"
            },
            background: {
                default: "#19181D",
                paper: "#0f0e11"
            },
            text: {
                primary: "#FEFFF5",
                secondary: "#CECEC2",
                primaryDark: "#19181D",
                secondaryDark: "#5B5765"
            }
        },
        typography: {
            fontFamily: bodyFontFamily.style.fontFamily,
            h1: {
                fontFamily: headerFontFamily.style.fontFamily,
                "@media (max-width:600px)": {
                    fontSize: "2.5rem"
                },
                fontSize: "4.0rem"
            },
            h3: {
                fontFamily: headerFontFamily.style.fontFamily,
                "@media (max-width:600px)": {
                    fontSize: "1.7rem"
                },
                fontSize: "2.25rem"
            },
            h4: {
                fontFamily: headerFontFamily.style.fontFamily,
                "@media (max-width:600px)": {
                    fontSize: "1.2rem"
                },
                fontSize: "1.5rem"
            },
            h5: {
                "@media (min-width:0px)": {
                    fontSize: "1.0rem"
                },
                "@media (min-width:200px)": {
                    fontSize: "1.4rem"
                }
            },
            body1: {
                "@media (max-width:600px)": {
                    fontSize: "0.9rem",
                    lineHeight: "30px"
                },
                fontSize: "1.0rem",
                lineHeight: "40px"
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        overflowX: "hidden"
                    }
                }
            }
        }
    });

    //theme = responsiveFontSizes(theme);
    return theme;
});
