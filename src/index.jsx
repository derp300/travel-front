import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./pages";
import "./styles/app.less";
import store, { history } from "./configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={Root} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
