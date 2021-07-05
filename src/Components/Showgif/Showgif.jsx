import React, { Suspense } from "react";
const Image = React.lazy(() => import("../Image/Image"));

const Showgif = ({ gifs, lang }) => {
	return gifs.map((gif, number) => (
		<Suspense key={number} fallback={<div className="loading">Your internet is very slow!</div>}>
			<Image gif={gif} key={number} lang={lang} />
		</Suspense>
	));
};

export default Showgif;
