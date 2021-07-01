import s from "./ContentFound.module.css";
import Showgif from "../Showgif/Showgif";

const ContentFound = ({ giveMoreGif, gifs, text, lang, offset }) => {
	return (
		<div className={s.content}>
			<div className={s.contentWrapper}>
				<Showgif gifs={gifs} />
			</div>
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

export default ContentFound;
