import React from "react";
import s from "./Searcher.module.css";
import loop from "../../img/loopSearch.svg";
import { setText } from "../../redux/reducers/searchReducer";
import { connect } from "react-redux";
import { giveGif } from "../../redux/reducers/gifReducer";

const Searcher = ({ setText, text, giveGif, placeholder }) => {
	const formValidate = () => {
		if (text === "") {
			return null;
		} else {
			giveGif(text);
		}
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

let mapStateToProps = (state) => ({
	text: state.search.text,
	language: state.gifs.language,
	placeholder: state.search.placeholder,
});

export default connect(mapStateToProps, { setText, giveGif })(Searcher);
