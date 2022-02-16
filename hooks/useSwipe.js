import { useState } from "react";

export default function useSwipe(funcExecuteSwipeLeft, funcExecuteSwipeRight) {
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	function handleTouchStart(e) {
		setTouchStart(e.targetTouches[0].clientX);
	}

	function handleTouchMove(e) {
		setTouchEnd(e.targetTouches[0].clientX);
	}

	function handleTouchEnd() {
		if (touchStart - touchEnd > 100) {
			// do your stuff here for left swipe
			funcExecuteSwipeLeft.call();
		}

		if (touchStart - touchEnd < -100) {
			// do your stuff here for right swipe
			funcExecuteSwipeRight.call();
		}
	}
	return [handleTouchStart, handleTouchMove, handleTouchEnd];
}
