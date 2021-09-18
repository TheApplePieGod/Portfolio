import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import memoizeOne from "memoize-one";

export const FONT_FAMILY: string = 'Fira Code';
export const PALETTE_RED: string = "#AC0E3E";
export const PALETTE_WHITE: string = "#FEFFF5";
export const PALETTE_DARK_WHITE: string = "#CECEC2";
export const PALETTE_DARK_DARK_WHITE: string = "#99998f";
export const PALETTE_BLACK: string = "#19181D";
export const PALETTE_ALMOST_BLACK: string = "#2c2a33";
export const PALETTE_LIGHT_BLACK: string = "#5B5765";

export const createApplicationTheme = memoizeOne(() => {
	let theme = createMuiTheme({
		palette: {
			type: "dark",
			primary: {
				main: PALETTE_RED,
			},
			secondary: {
				main: PALETTE_BLACK,
			},
			error: {
				main: PALETTE_RED,
			},
			text: {
				primary: PALETTE_WHITE,
				secondary: PALETTE_DARK_WHITE,
			}
		},
		typography: {
			fontFamily: FONT_FAMILY,
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
				},
			},
		},
		overrides: {
			MuiPaper: {
				root: {
					backgroundColor: PALETTE_WHITE
				}
			},
			// MuiCssBaseline: {
			// 	"@global": {
			// 		body: {
			// 			backgroundColor: PALETTE_BLACK
			// 		},
			// 	},
			// },
		}
	});

	theme = responsiveFontSizes(theme);
	return theme;
});