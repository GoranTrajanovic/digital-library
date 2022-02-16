//stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component

import { useState, useEffect } from "react";

export function useDelayUnmount(isMounted, delayTime) {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let timeoutId;
		if (isMounted && !shouldRender) {
			setShouldRender(true);
		} else if (!isMounted && shouldRender) {
			timeoutId = setTimeout(() => setShouldRender(false), delayTime);
		}
		return () => clearTimeout(timeoutId);
	}, [isMounted, delayTime, shouldRender]);
	return shouldRender;
}

// export const Test = () => {
// 	const [isMounted, setIsMounted] = useState(true);
// 	const shouldRenderChild = useDelayUnmount(isMounted, 500);
// 	const mountedStyle = {
// 		opacity: 1,
// 		transition: "opacity 500ms ease-in",
// 		width: "100px",
// 		height: "100px",
// 		background: "red",
// 	};
// 	const unmountedStyle = {
// 		opacity: 0,
// 		transition: "opacity 500ms ease-in",
// 		width: "100px",
// 		height: "100px",
// 		background: "red",
// 	};

// 	const handleToggleClicked = () => {
// 		setIsMounted(!isMounted);
// 	};

// 	return (
// 		<>
// 			{shouldRenderChild && (
// 				<div style={isMounted ? mountedStyle : unmountedStyle}></div>
// 			)}
// 			<button onClick={handleToggleClicked}>Click me!</button>
// 		</>
// 	);
// };
