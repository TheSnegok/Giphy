import { useState } from "react";
import s from "./Image.module.css";
import useOnScreen from "../../hook/useOnScreen";

interface PropImage {
	gif: any;
	lang: string;
};

const Image = ({ gif, lang }: PropImage) => {
	const [loader, setLoader] = useState<boolean>(false);
	const [setRef, visible] = useOnScreen({ rootMargin: "0px" });

	const loadImage = (): void => setLoader(true);

	const copyLink = (text: string): void => {
		try {
			navigator.clipboard.writeText(text);
		} catch (error) {
			console.error(error);
		}
	}

	if (!gif) return null;
	return (
		<div className={s.wrapper} ref={setRef}>
			<div
				className={s.image}
				data-title={lang === 'en' ? 'Click to copy the link to the gif' : 'Нажмите чтобы скопировать ссылку на гиф'}
			>
				<picture className={visible ? s.showPicture : s.nonePicture}>
					<source type="image/webp" />
					<img
						src={gif.images.preview_webp?.url || gif.images.original.url}
						alt={gif.slug}
						key={gif.id}
						className={!loader ? s.gifNone : s.gif}
						onClick={() => copyLink(gif.images.original.url)}
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
