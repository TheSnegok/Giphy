import s from "./ContentNotFound.module.css";
import cryBunny from "../../img/cry_bunny.png";
import { connect } from "react-redux";

interface PropContentNotFound {
	lang: string
}

const ContentNotFound = ({lang}: PropContentNotFound) => {
	return (
		<div className={s.contentNotFound}>
			<h1>{lang === 'en' ? 'Gif not found' : 'Гиф не найдены'}</h1>
			<img alt="cry" src={cryBunny} />
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	lang: state.gifs.language
})

export default connect(mapStateToProps, {})(ContentNotFound);
