import s from "./ContentNotFound.module.css";
import cryBunny from "../../img/cry_bunny.png";

const ContentNotFound = () => {
	return (
		<div className={s.contentNotFound}>
			<h1>Gif not found</h1>
			<img alt="cry" src={cryBunny} />
		</div>
	);
};

export default ContentNotFound;
