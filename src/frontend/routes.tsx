import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory, useParams, withRouter } from "react-router-dom";
import { Home } from "./components/home";
import { createApplicationTheme } from "./theme";

import './css/global.css'
import { PageWrapper } from "./components/pageWrapper";
import { Section } from "./components/section";
import { Contact } from "./components/contact";

export const Routes = () => {
    return (
        <MuiThemeProvider theme={createApplicationTheme()}>
            <PageWrapper>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/about'} render={() =>
                        <Section
                            key="0"
                            title="About Me"
                            subtitle="i am a high school student with a passion for computer science"
                            buttonText="LEARN MORE"
                            buttonPath="/about/more"
                            imagePath="images/about.jpg"
                            basePath="/about"
                        />
                    }/>
                    <Route path={'/projects'} render={() =>
                        <Section
                            key="1"
                            title="Projects"
                            subtitle="take a look at the various projects i have created and been involved with over the years"
                            buttonText="EXPLORE"
                            buttonPath="/projects/more"
                            imagePath="images/projects.jpg"
                            basePath="/projects"
                        />
                    }/>
                    <Route path={'/'} render={() => <Redirect to={'/'} />} />
                </Switch>
            </PageWrapper>
        </MuiThemeProvider>
    );
}