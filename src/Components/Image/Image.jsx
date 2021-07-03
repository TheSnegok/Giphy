import React, { useRef, useState } from "react";
import s from "./Image.module.css";
import useOnScreen from "../../hook/useOnScreen";

const Image = React.memo((props) => {
	let gif = props.gif;
	const containerRef = useRef();

	const [loader, setLoader] = useState(false);

	let clickCopy = (elem) => {
		navigator.clipboard.writeText(elem);
	};

	const loadImage = () => {
		setLoader(true);
	};

	const visible = useOnScreen(containerRef);

	return (
		<div className={s.wrapper} key={gif.id}>
			<div
				className={s.image}
				data-title="Нажмите чтобы скопировать ссылку на изображение"
				ref={containerRef}
			>
				<picture className={visible ? s.showPicture : s.nonePicture} >
					<source type="image/webp" />
					<img
						src={gif.images.original.webp}
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
});

export default Image;
