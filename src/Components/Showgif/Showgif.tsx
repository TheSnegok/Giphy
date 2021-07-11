import React, { Suspense } from "react";
const Image = React.lazy(() => import("../Image/Image"));

interface PropshowGif {
	gifs: object[],
	lang: string,
}

const Showgif = ({ gifs, lang }: PropshowGif) => {
	return (
		<>
			{gifs.map((gif: any, key: number) => (
				<Suspense key={key} fallback={<div className="loading">Your internet is very slow!</div>}>
					<Image gif={gif} keyImage={key} lang={lang} />
				</Suspense>
			))}
		</>
	)
};

export default Showgif;
