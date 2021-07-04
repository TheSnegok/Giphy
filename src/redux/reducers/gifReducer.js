import { gipherAPI } from "../../api/api";

const SAVE_GIF = "SAVE_GIF",
	SET_LANG = "SET_LANG",
	SET_OFFSET = "SET_OFFSET",
	SAVE_NEW_GIF = "SAVE_NEW_GIF",
	SET_FOUND = "SET_FOUND",
	SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
	items: [],
	language: "en",
	offset: 0,
	found: true,
	totalCount: undefined,
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
		case SET_FOUND:
			return {
				...state,
				found: action.found,
			};
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			};
		default:
			return state;
	}
};

export const saveGif = (gif) => ({ type: SAVE_GIF, gif });
export const saveNewGif = (newGif) => ({ type: SAVE_NEW_GIF, newGif });
export const setLanguage = (lang) => ({ type: SET_LANG, lang });
export const setOffset = (offset) => ({ type: SET_OFFSET, offset });
export const setFound = (found) => ({ type: SET_FOUND, found });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const giveGif =
	(text, offset = 1) =>
	async (dispatch) => {
		let response = await gipherAPI.getGif(text, offset);
		if (response.meta.status === 200 && response.data.length > 0) {
			dispatch(setFound(true));
			dispatch(saveGif(response.data));
			dispatch(setTotalCount(response.pagination.total_count));
			dispatch(setOffset(offset + 15));
		} else {
			dispatch(setFound(false));
		}
	};

export const giveMoreGif = (text, offset) => async (dispatch) => {
	let response = await gipherAPI.getGif(text, offset);
	if (response.meta.status === 200) {
		dispatch(saveNewGif(response.data));
		dispatch(setOffset(offset + 15));
	}
};

export default gifReducer;
