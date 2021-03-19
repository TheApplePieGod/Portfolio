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

export const Routes = () => {
    return (
        <MuiThemeProvider theme={createApplicationTheme()}>
            <PageWrapper>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/projects'} component={Projects} />
                    <Route path={'/contact'} component={Contact} />
                    <Route path={'/'} render={() => <Redirect to={'/'} />} />
                </Switch>
            </PageWrapper>
        </MuiThemeProvider>
    );
}