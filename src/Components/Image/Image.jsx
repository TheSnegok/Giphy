import React, { useState } from "react";
import s from "./Image.module.css";

const Image = (props) => {
	let gif = props.gif;

	const [loader, setLoader] = useState(false);

	let clickCopy = (elem) => {
		navigator.clipboard.writeText(elem);
	};

	const loadImage = () => {
		setLoader(true);
	};

	return (
		<div className={s.wrapper} key={gif.id}>
			<div
				className={s.image}
				data-title="Нажмите чтобы скопировать ссылку на изображение"
			>
				<picture >
					<source type="image/webp" />
					<img
						src={gif.images.preview_webp.url}
						alt={gif.slug}
						key={gif.id}
						className={!loader ? s.gifNone : s.gif}
						onClick={() => clickCopy(gif.images.original.url)}
						onLoad={() => loadImage()}
						crossOrigin="anonymous"
						width="361"
						height="203"
					/>
				</picture>
			</div>

			{!loader && <div className={s.loader}></div>}
		</div>
	);
};

export default Image;
