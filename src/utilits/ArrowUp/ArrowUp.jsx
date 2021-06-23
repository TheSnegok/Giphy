import React, { useEffect, useState } from "react";
import "./ArrowUp.module.css";

const ArrowUp = () => {
	const [display, setDisplay] = useState("none");

	useEffect(() => {
		document.addEventListener('scroll', showArrowUp);
		return () => {
			document.removeEventListener('scroll', showArrowUp);
		} 
	}, []);

	const showArrowUp = (e) => {
		window.pageYOffset === 0 ? setDisplay("none") : setDisplay("block");
	} 

	let toTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div
			className="Arrow-Up"
			onClick={() => toTop()}
			style={{ display: display }}
		>
			<svg width="70px" height="70px" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M35 15, 35 65"
					strokeWidth="4"
					stroke="white"
					className="centralLine"
				></path>
				{/* central line*/}
				<path
					d="M35 15, 15 35"
					strokeWidth="2"
					stroke="white"
					className="leftLine"
				></path>
				{/*left line*/}
				<path
					d="M35 15, 55 35"
					strokeWidth="2"
					stroke="white"
					className="rightLine"
				></path>
				{/*right line*/}
			</svg>
		</div>
	);
};

export default ArrowUp;
