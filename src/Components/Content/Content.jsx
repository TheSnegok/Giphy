import s from "./Content.module.css";
import { connect } from "react-redux";
import { giveMoreGif } from "../../redux/reducers/gifReducer";
import Showgif from "../Showgif/Showgif";

const Content = (props) => {
	let giveMoreGif = props.giveMoreGif,
		text = props.text,
		lang = props.lang,
		offset = props.offset;

	return (
		<div className={s.content}>
			<div className={s.contentWrapper}>
				<Showgif gifs={props.gifs} {...props} />
			</div>
			{props.gifs.length === 0 ? null : (
				<div
					onClick={() => giveMoreGif(text, lang, offset)}
					className={s.showMore}
				>
					Show more
				</div>
			)}
		</div>
	);
};

let mapStateToProps = (state) => ({
	gifs: state.gifs.items,
	offset: state.gifs.offset,
	text: state.search.text,
	lang: state.search.lang,
});

export default connect(mapStateToProps, { giveMoreGif })(Content);
