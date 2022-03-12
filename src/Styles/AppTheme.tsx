import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { amber, blueGrey, deepOrange } from "@mui/material/colors";
import memoizeOne from "memoize-one";

declare module '@mui/material/styles' {
	interface TypeText {
		primaryDark: string;
	}

	// allow configuration using `createTheme`
	interface TypeTextOptions {
		primaryDark?: string;
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
				secondary: "#CECEC2"
			}
		},
		typography: {
			fontFamily: "'Fira Code', sans-serif"
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {

				}
			},
		}
	});

	theme = responsiveFontSizes(theme);
	return theme;
});