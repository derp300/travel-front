import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import signalsMiddleware from "./signalsMiddleware";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./localStorage/localStorage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

let middleware;
if (process.env.NODE_ENV === "development") {
    middleware = applyMiddleware(
        thunkMiddleware,
        signalsMiddleware,
        routerMiddleware(history)
    );
} else {
    middleware = applyMiddleware(
        thunkMiddleware,
        signalsMiddleware,
        routerMiddleware(history)
    );
}

const configureStore = preloadedState =>
    createStore(rootReducer(history), preloadedState, middleware);

const stateFromLocalStorage = loadState();
const store = configureStore(stateFromLocalStorage);
store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

export default store;
