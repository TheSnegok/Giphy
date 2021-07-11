import s from "./AppHeader.module.css";
import Searcher from "../Searcher/Searcher";
import HeaderText from "../HeaderText/HeaderText";

const AppHeader = () => {
	return (
		<header className={s.App_header}>
			<HeaderText />
			<Searcher />
		</header>
	);
};

export default AppHeader;
