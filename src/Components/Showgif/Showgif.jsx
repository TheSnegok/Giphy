import React, { Suspense } from "react";
const Image = React.lazy(() => import("../Image/Image"));

const Showgif = ({ gifs }) => {
	return gifs.map((gif, number) => (
		<Suspense key={number} fallback={<div className="loading">Your internet is very slow!</div>}>
			<Image gif={gif} key={number} />
		</Suspense>
	));
};

export default Showgif;
