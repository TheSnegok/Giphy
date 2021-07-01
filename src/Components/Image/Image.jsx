import { useState } from "react";
import s from "./Image.module.css";

const Image = (props) => {
	let gif = props.gif;

	const [loader, setLoader] = useState(false);

	let clickCopy = (elem) => {
		navigator.clipboard.writeText(elem);
	};

	const loadImage = () => {
		setLoader(true);
	}

	return (
		<div className={s.wrapper} key={gif.id}>
			<img
				src={gif.images.fixed_height.webp}
				alt={gif.slug}
				key={gif.id}
				className={!loader ? s.gifNone : s.gif}
				onClick={() => clickCopy(gif.images.original.url)}
				onLoad={() => loadImage()}
			/>
			{!loader && <div className={s.loader}></div>}
		</div>
	);
};

export default Image;
