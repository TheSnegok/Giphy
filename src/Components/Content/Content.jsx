import { connect } from "react-redux";
import { giveMoreGif } from "../../redux/reducers/gifReducer";
import s from "./Content.module.css";

const Content = (props) => {

	let gifs = props.gifs,
		giveMoreGif = props.giveMoreGif,
		text = props.text,
		lang = props.lang,
		offset = props.offset;

	let clickCopy = (elem) => {
		navigator.clipboard.writeText(elem);
	};

	let showGif = gifs.map((gif) => (
		<div className={s.wrapper} key={gif.id}>
			<img
				src={gif.images.fixed_height.url}
				alt={gif.slug}
				key={gif.id}
				className={s.gif}
				onClick={() => clickCopy(gif.images.original.url)}
			/>
		</div>
	));

	return (
		<div className={s.content}>
			<div className={s.contentWrapper}>{showGif}</div>
			{gifs.length === 0 ? null : (
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
