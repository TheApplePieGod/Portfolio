import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { amber, blueGrey, deepOrange } from "@mui/material/colors";
import memoizeOne from "memoize-one";

declare module '@mui/material/styles' {
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

// https://material.io/resources/color/
// https://mui.com/customization/palette/
// https://mui.com/customization/color/
export const createAppTheme = memoizeOne(() => {
	let theme = createTheme({
		palette: {
			primary: {
				main: "#AC0E3E",
			},
			secondary: {
				main: deepOrange[500],
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
			fontFamily: "'Fira Code', sans-serif",
			h1: {
				'@media (min-width:200px)': {
					fontSize: '2.0rem',
				},
			},
			h4: {
				'@media (min-width:200px)': {
					fontSize: '1.2rem',
				},
			},
			h5: {
				'@media (min-width:200px)': {
					fontSize: '1.0rem',
				},
			},
			body1: {
				'@media (min-width:200px)': {
					fontSize: '0.8rem',
				},
				'@media (min-width:600px)': {
					fontSize: '1.0rem',
				}
			}
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						overflowX: "hidden"
					}
				}
			},
		}
	});

	theme = responsiveFontSizes(theme);
	return theme;
});