import React from "react";
import s from "./Searcher.module.css";
import loop from "../../img/loopSearch.svg";
import { setText } from "../../redux/reducers/searchReducer";
import { connect } from "react-redux";
import { giveGif } from "../../redux/reducers/gifReducer";

const Searcher = (props) => {
	let setText = props.setText,
		textState = props.text,
		giveGif = props.giveGif,
		placeholder = props.placeholder,
		language = props.language;

	return (
		<div className={s.searcher}>
			<input
				type="text"
				name="search"
				className={s.searchInput_text}
				placeholder={placeholder}
				value={textState}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => (e.code === "Enter" ? giveGif(textState, language) : null)}
			/>
			<div className={s.searchBg}>
				<input
					type="submit"
					value=""
					className={s.searchInput_submit}
					onClick={() => giveGif(textState, language)}
				/>
				<img src={loop} alt="loop" className={s.search} />
			</div>
		</div>
	);
};

let mapStateToProps = (state) => ({
	text: state.search.text,
	language: state.gifs.language,
	placeholder: state.search.placeholder,
});

export default connect(mapStateToProps, { setText, giveGif })(Searcher);
