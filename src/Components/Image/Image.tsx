import { useState } from "react";
import s from "./Image.module.css";
import useOnScreen from "../../hook/useOnScreen";

interface PropImage {
	gif: any,
	lang: string,
	key: number,
};

const Image = ({ gif, lang, key }: PropImage) => {
	const [loader, setLoader] = useState<boolean>(false);

	const clickCopy = (elem: any) => {
		navigator.clipboard.writeText(elem);
	};

	const loadImage = () => {
		setLoader(true);
	};

	const [setRef, visible] = useOnScreen({ rootMargin: "0px"});

	if(!gif) return null;
	return (
		<div className={s.wrapper} key={key} ref={setRef}>
			<div
				className={s.image}
				data-title={lang === 'en' ? 'Click to copy the link to the gif' : 'Нажмите чтобы скопировать ссылку на гиф'}
			>
				<picture className={visible ? s.showPicture : s.nonePicture}>
					<source type="image/webp" />
					<img
						src={gif.images.preview_webp.url === undefined ? gif.images.downsized_large.url : gif.images.preview_webp.url}
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
