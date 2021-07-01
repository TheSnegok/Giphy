import s from "./ContentFound.module.css";
import Showgif from "../Showgif/Showgif";

const ContentFound = ({
	giveMoreGif,
	gifs,
	text,
	lang,
	offset,
	totalCount,
}) => {
	return (
		<div className={s.content}>
			<div className={s.contentWrapper}>
				<Showgif gifs={gifs} />
			</div>
			{totalCount <= 15 || totalCount === gifs.length ? null : (
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
