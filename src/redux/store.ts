import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import gifReducer from "./reducers/gifReducer";
import searchReducer from "./reducers/searchReducer";

const reducers = combineReducers({
	gifs: gifReducer,
	search: searchReducer,
});

const store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware)
);

export default store;
