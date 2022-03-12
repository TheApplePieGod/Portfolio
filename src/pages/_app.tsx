import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../Components/Hooks/CreateEmotionCache";
import { Box, CircularProgress } from "@mui/material";
import { createAppTheme } from "../Styles/AppTheme";
import { GlobalSnackbar } from "../Components/UI/GlobalSnackbar";
import { PageWrapper } from "../Components/UI/PageWrapper";
import { DefaultSeo } from "next-seo";
import { store } from '../Redux/Store';
import { Provider } from 'react-redux';

import SeoConfig from "../Definitions/SeoConfig";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// TODO: types for these things?
// https://github.com/mui/material-ui/blob/master/examples/nextjs/pages/_app.js
const CustomApp = (props: any) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <DefaultSeo {...SeoConfig} />
                <ThemeProvider theme={createAppTheme()}>
                    <CssBaseline />
                    <GlobalSnackbar />
                    <PageWrapper>
                        <Box sx={{ margin: "10px" }}>
                            <Component {...pageProps} />
                        </Box>
                    </PageWrapper>
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

export default CustomApp;