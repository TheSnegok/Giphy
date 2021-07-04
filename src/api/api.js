import Axios from "axios";

export const gipherAPI = {
	getGif(text, offset) {
		return Axios.get(
			`https://api.giphy.com/v1/gifs/search?api_key=uCB8tNDRVSBKYrTFRAeZryIQ4r0XzU3M&q=${text}&limit=15&offset=${offset}&rating=g&lang=en`
		).then((response) => {
			return response.data;
		});
	},
};
