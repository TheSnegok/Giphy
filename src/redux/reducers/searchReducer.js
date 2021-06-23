const SAVE_TEXT = "SAVE_TEXT",
	  SET_PLACEHOLDER = "SET_PLACEHOLDER";

const initialState = {
	text: "",
	placeholder: "Enter your text..."
};

let searchReducer = (state = initialState, action) => {
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

export const setText = (text) => ({ type: SAVE_TEXT, text });
export const setPlaceholder = (placeholder) => ({ type: SET_PLACEHOLDER, placeholder });

export default searchReducer;
