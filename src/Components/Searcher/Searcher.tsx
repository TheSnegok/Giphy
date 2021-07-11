import s from "./Searcher.module.css";
import loop from "../../img/loopSearch.svg";
import { setText } from "../../redux/reducers/searchReducer";
import { connect } from "react-redux";
import { giveGif } from "../../redux/reducers/gifReducer";

interface PropSearcher {
	setText: any, 
	text: string,
	giveGif: any,
	placeholder: string
}

const Searcher = ({ setText, text, giveGif, placeholder }: PropSearcher) => {
	const formValidate = (): void => {
		text !== "" && giveGif(text);
	};

	return (
		<div className={s.searcher}>
			<input
				type="text"
				name="search"
				className={s.searchInput_text}
				placeholder={placeholder}
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => (e.code === "Enter" ? formValidate() : null)}
			/>
			<div className={s.searchBg}>
				<input
					type="submit"
					value=""
					className={s.searchInput_submit}
					onClick={() => formValidate()}
				/>
				<img src={loop} alt="loop" className={s.search} />
			</div>
		</div>
	);
};

let mapStateToProps = (state: any) => ({
	text: state.search.text,
	language: state.gifs.language,
	placeholder: state.search.placeholder,
});

export default connect(mapStateToProps, { setText, giveGif })(Searcher);
