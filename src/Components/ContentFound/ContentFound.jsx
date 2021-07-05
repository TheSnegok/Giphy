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
				<Showgif gifs={gifs} lang={lang}/>
			</div>
			{totalCount === undefined ||
			totalCount <= 15 ||
			(gifs.length !== 0
				? totalCount - 1 === gifs.length
				: true) ? null : (
				<div
					onClick={() => giveMoreGif(text, offset)}
					className={s.showMore}
				>
					{ lang === 'en' ? 'Show more' : 'Показать больше'}
				</div>
			)}
		</div>
	);
};

export default ContentFound;
