export const useOverlay = boolShow => {
	const body = document.body;
	const overlay = document.createElement("div");
	const oldOverlay = document.getElementById("overlay");

	if (!boolShow) {
		oldOverlay && body.removeChild(oldOverlay);
	} else {
		body.style.overflowY = boolShow ? "hidden" : "auto";
		overlay.id = "overlay";
		overlay.style.position = "fixed";
		overlay.style.top = 0;
		overlay.style.bottom = 0;
		overlay.style.left = 0;
		overlay.style.right = 0;
		overlay.style.background = "rgba(0,0,0,0.5)";
		body.appendChild(overlay);

		overlay.addEventListener("click", e => {
			const modal = document.getElementById("modal");
			e.target.parentNode.removeChild(e.target);
			// console.dir(modal);
			// modal ? (modal.style.display = "none") : "";
			modal && modal.parentNode.removeChild(modal);
		});
	}
};
