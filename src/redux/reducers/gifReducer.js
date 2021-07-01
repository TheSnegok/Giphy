import { gipherAPI } from "../../api/api";

const SAVE_GIF = "SAVE_GIF",
	SET_LANG = "SET_LANG",
	SET_OFFSET = "SET_OFFSET",
	SAVE_NEW_GIF = "SAVE_NEW_GIF";

const initialState = {
	items: [],
	language: "en",
	offset: 0,
};

let gifReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_GIF:
			return {
				...state,
				items: action.gif,
			};
		case SAVE_NEW_GIF:
			return {
				...state,
				items: [...state.items, ...action.newGif],
			};
		case SET_LANG:
			return {
				...state,
				language: action.lang,
			};
		case SET_OFFSET:
			return {
				...state,
				offset: action.offset,
			};
		default:
			return state;
	}
};

export const saveGif = (gif) => ({ type: SAVE_GIF, gif });
export const saveNewGif = (newGif) => ({ type: SAVE_NEW_GIF, newGif });
export const setLanguage = (lang) => ({ type: SET_LANG, lang });
export const setOffset = (offset) => ({ type: SET_OFFSET, offset });

export const giveGif =
	(text, lang, offset = 1) =>
	async (dispatch) => {
		let response = await gipherAPI.getGif(text, lang, offset);
		if (response.meta.status === 200 && response.data.length > 0) {
			dispatch(saveGif(response.data));
			dispatch(setOffset(offset + 15));
		}
	};

export const giveMoreGif = (text, lang, offset) => async (dispatch) => {
	let response = await gipherAPI.getGif(text, lang, offset);
	if (response.meta.status === 200) {
		dispatch(saveNewGif(response.data));
		dispatch(setOffset(offset + 15));
	}
};

export default gifReducer;
