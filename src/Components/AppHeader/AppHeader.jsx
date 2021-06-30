import React from "react";
import { connect } from "react-redux";
import s from "./AppHeader.module.css";
import { setLanguage } from "../../redux/reducers/gifReducer";
import { setPlaceholder } from "../../redux/reducers/searchReducer";
import Searcher from "../Searcher/Searcher";

const AppHeader = (props) => {
	let setLanguage = props.setLanguage,
		setPlaceholder = props.setPlaceholder;

	let toggleLanguage = (e) => {
		if (e.target.value === "en") {
			setLanguage("en");
			setPlaceholder("Enter your text...");
		} else {
			setLanguage("ru");
			setPlaceholder("Введите свой текст...");
		}
	};

	return (
		<header className={s.App_header}>
			<div className={s.App_headerText}>
				<div className={s.giphyText}>
					<header className={s.header}>
						<h1>Giphy</h1>
					</header>
					<div className={s.toggle_language}>
						<select onChange={(e) => toggleLanguage(e)}>
							<option value="en">EN</option>
							<option value="ru">RU</option>
						</select>
					</div>
				</div>
			</div>
			<div className={s.App_headerInput}>
				<Searcher />
			</div>
		</header>
	);
};

export default connect(null, { setLanguage, setPlaceholder })(AppHeader);
