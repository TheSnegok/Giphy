import React, { Suspense } from "react";
import "./Showgif.module.css";
const Image = React.lazy(() => import("../Image/Image"));

interface PropshowGif {
	gifs: object[],
	lang: string,
}

const Showgif = ({ gifs, lang }: PropshowGif) => {
	return (
		<Suspense fallback={<div className="loading">We search your GIF)</div>}>
			{gifs.map((gif: any, key: number) => (
					<Image gif={gif} key={key} lang={lang} />
			))}
		</Suspense>
	)
};

export default Showgif;
