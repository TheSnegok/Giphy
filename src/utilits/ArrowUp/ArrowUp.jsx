import React, { useEffect, useState } from "react";

const ArrowUp = React.memo(() => {
	const [show, setShow] = useState("Arrow-Up_unshow");

	useEffect(() => {
		document.addEventListener('scroll', showArrowUp);
		return () => {
			document.removeEventListener('scroll', showArrowUp);
		} 
	}, []);

	const showArrowUp = () => {
		window.pageYOffset < 100  ? setShow("Arrow-Up_unshow") : setShow("Arrow-Up_show");
	}

	return (
		<div
			className={show}
			onClick={() => window.scrollTo(0, 0)}
		>
			<svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M50 100, 50 0"
					strokeWidth="4"
					stroke="black"
					className="centralLine"
				></path>
				{/* central line*/}
				<path
					d="M10 35, 50 0"
					strokeWidth="2"
					stroke="black"
					className="leftLine"
				></path>
				{/*left line*/}
				<path
					d="M90 35, 50 0"
					strokeWidth="2"
					stroke="black"
					className="rightLine"
				></path>
				{/*right line*/}
			</svg>
		</div>
	);
});

export default ArrowUp;
