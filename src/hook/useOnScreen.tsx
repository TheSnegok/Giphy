import { useState, useEffect, MutableRefObject } from "react";

// Hook
const useOnScreen = <T extends Element | null>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean => {
	const [isIntersecting, setIntersecting] = useState<boolean>(false);
	const stateRef = ref.current;
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
			}, {
			rootMargin
		});
		if (stateRef) {
			observer.observe(stateRef);
		}
		return () => { // eslint-disable-next-line
			if (stateRef) {
				observer.unobserve(stateRef);
			}
		};
	}, [stateRef, rootMargin]); // Empty array ensures that effect is only run on mount and unmount 
	return isIntersecting;
};

export default useOnScreen;