import { useEffect, useState } from "react";
import s from "./Showgif.module.css";

const Showgif = (props) => {
	let gif = props.gifs;

	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(false);
	}, [props.gifs]);

	const loadImage = () => {
		setLoader(true);
	};

	let clickCopy = (elem) => {
		navigator.clipboard.writeText(elem);
	};

	return gif.map((gif, number) => (
		<div className={s.wrapper} key={gif.id}>
			<img
				src={gif.images.fixed_height.webp}
				alt={gif.slug}
				className={!loader ? s.gifNone : s.gif}
				onClick={() => clickCopy(gif.images.original.url)}
				onLoad={() => loadImage()}
			/>
			{!loader && <div className={s.loader}></div>}
		</div>
	));
};

export default Showgif;
