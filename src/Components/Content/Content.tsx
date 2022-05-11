import { connect } from "react-redux";
import { giveMoreGif } from "../../redux/reducers/gifReducer";
import ContentFound from "../ContentFound/ContentFound";
import ContentNotFound from "../ContentNotFound/ContentNotFound";

interface PropContent {
	giveMoreGif: Function,
	gifs: object[],
	text: string,
	lang: string,
	offset: number,
	found: undefined | boolean,
	totalCount: number
}

const Content = ({ giveMoreGif, gifs, text, lang, offset, found, totalCount }: PropContent) => {
	
	return (
		found === undefined 
		? null
		: (<>
			{found ? (
				<ContentFound
					giveMoreGif={giveMoreGif}
					gifs={gifs}
					text={text}
					lang={lang}
					offset={offset}
					totalCount={totalCount}
				/>
			) : (
				<ContentNotFound />
			)}
		</>)
	);
};

let mapStateToProps = (state: any) => ({
	gifs: state.gifs.items,
	offset: state.gifs.offset,
	found: state.gifs.found,
	totalCount: state.gifs.totalCount,
	text: state.search.text,
	lang: state.gifs.language,
});

export default connect(mapStateToProps, { giveMoreGif })(Content);
