import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory, useParams, withRouter } from "react-router-dom";
import { Home } from "./components/home";
import { createApplicationTheme } from "./theme";

import './css/global.css'
import { PageWrapper } from "./components/pageWrapper";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Homelab } from "./components/homelab";

export const Routes = () => {
    React.useEffect(() => {
       const preloadImages = ["images/about.jpg", "images/projects.jpg", "images/homelab.png", "images/contact.jpg"];
       preloadImages.forEach((src) => {
           const img = new Image();
           img.src = src;
       }) 
    }, []);

    return (
        <MuiThemeProvider theme={createApplicationTheme()}>
            <PageWrapper>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/projects'} component={Projects} />
                    <Route path={'/homelab'} component={Homelab} />
                    <Route path={'/contact'} component={Contact} />
                    <Route path={'/'} render={() => <Redirect to={'/'} />} />
                </Switch>
            </PageWrapper>
        </MuiThemeProvider>
    );
}