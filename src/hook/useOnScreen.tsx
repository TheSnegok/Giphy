import { useState, useEffect } from "react";

// Hook
const useOnScreen = (option: object) => {
	const [ref, setRef] = useState<HTMLDivElement | null>(null);										
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
			}, option);
		if (ref) {
			observer.observe(ref);
		}
		return () => { // eslint-disable-next-line
			if (ref) {
				observer.unobserve(ref);
			}
		}; // eslint-disable-next-line
	}, [ref, option]); // Empty array ensures that effect is only run on mount and unmount 
	return [setRef, isIntersecting];
};

export default useOnScreen;
