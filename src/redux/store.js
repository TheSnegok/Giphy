import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import gifReducer from "./reducers/gifReducer";
import searchReducer from "./reducers/searchReducer";

let reducers = combineReducers({
	gifs: gifReducer,
	search: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
