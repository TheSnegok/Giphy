import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import gifReducer from "./reducers/gifReducer";
import searchReducer from "./reducers/searchReducer";

declare global {
	interface Window {
	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

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
