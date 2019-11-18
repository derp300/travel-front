import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./main";

const Root = () => {
    return (
        <Switch>
            <Route path="/" component={Main} />
        </Switch>
    );
};

export default Root;
