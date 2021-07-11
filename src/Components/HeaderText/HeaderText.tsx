import React from "react";
import s from "./HeaderText.module.css";
import { setLanguage } from "../../redux/reducers/gifReducer";
import { setPlaceholder } from "../../redux/reducers/searchReducer";
import { connect } from "react-redux";

interface PropHeaderText {
    setLanguage: Function,
    setPlaceholder: Function,
}

const HeaderText = ({ setLanguage, setPlaceholder }: PropHeaderText) => {

    let toggleLanguage = (e: React.SyntheticEvent<EventTarget>) => {
		if ((e.target as HTMLInputElement).value === "en") {
			setLanguage("en");
			setPlaceholder("Enter your text...");
		} else {
			setLanguage("ru");
			setPlaceholder("Введите свой текст...");
		}
	};

    return (
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
    )
}

export default connect(null, { setLanguage, setPlaceholder })(HeaderText);