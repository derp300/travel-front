import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
    });

const wrappedRootReducer = history => (state, action) => {
    return rootReducer(history)(state, action);
};

export default wrappedRootReducer;
