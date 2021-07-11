interface searchState {
	text: string,
	placeholder: string,
}

interface Action {
	type: string,
	text: string,
	placeholder: string,
}

const SAVE_TEXT: string = "SAVE_TEXT",
	  SET_PLACEHOLDER: string = "SET_PLACEHOLDER";

const initialState:searchState = {
	text: "",
	placeholder: "Enter your text..."
};

let searchReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SAVE_TEXT:
			return {
				...state,
				text: action.text,
			};
		case SET_PLACEHOLDER:
			return {
				...state,
				placeholder: action.placeholder,
			};
		default:
			return state;
	}
};

export const setText = (text: string) => ({ type: SAVE_TEXT, text });
export const setPlaceholder = (placeholder: string) => ({ type: SET_PLACEHOLDER, placeholder });

export default searchReducer;
