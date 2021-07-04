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
	console.log(
		totalCount,
		"общее количество",
		gifs.length,
		"количество выведенных гиф"
	);
	return (
		<div className={s.content}>
			<div className={s.contentWrapper}>
				<Showgif gifs={gifs} />
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
					Show more
				</div>
			)}
		</div>
	);
};

export default ContentFound;
