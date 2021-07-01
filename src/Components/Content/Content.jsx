import { connect } from "react-redux";
import { giveMoreGif } from "../../redux/reducers/gifReducer";
import ContentFound from "../ContentFound/ContentFound";
import ContentNotFound from "../ContentNotFound/ContentNotFound";

const Content = ({ giveMoreGif, gifs, text, lang, offset, found }) => {
	return (
		<>
			{found ? (
				<ContentFound
					giveMoreGif={giveMoreGif}
					gifs={gifs}
					text={text}
					lang={lang}
					offset={offset}
				/>
			) : (
				<ContentNotFound />
			)}
		</>
	);
};

let mapStateToProps = (state) => ({
	gifs: state.gifs.items,
	offset: state.gifs.offset,
	found: state.gifs.found,
	text: state.search.text,
	lang: state.search.lang,
});

export default connect(mapStateToProps, { giveMoreGif })(Content);
