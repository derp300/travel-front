import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./pages";
import "./styles/app.less";
import store, { history } from "./configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={Root} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
