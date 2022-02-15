import { useEffect, useRef, useState } from "react";
import styles from "./HamburgerMenu.module.sass";

export default function HamburgerMenu({ children, navigationLinks }) {
	const menuCheckedRef = useRef();
	const overlayRef = useRef();
	const [boolChecked, setBoolChecked] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = boolChecked ? "hidden" : "auto";
		overlayRef.current.style.display = boolChecked ? "block" : "none";
	}, [boolChecked]);

	function handleMenuClick() {
		// menuCheckedRef.current.checked = !menuCheckedRef.current.checked;
		setBoolChecked(prevS => !prevS);
	}

	function handleOverlayClick() {
		menuCheckedRef.current.checked = false;
		overlayRef.current.style.display = "none";
		setBoolChecked(prevS => !prevS);
	}

	return (
		<div className={styles.menuToggle}>
			<input type="checkbox" ref={menuCheckedRef} onClick={handleMenuClick} />
			<div
				className={styles.overlay}
				ref={overlayRef}
				onClick={handleOverlayClick}
			></div>
			<span></span>
			<span></span>
			<span></span>

			<ul className={styles.menu}>
				{navigationLinks.map(link => {
					return (
						<a href="#" key={link}>
							<li>{link}</li>
						</a>
					);
				})}
			</ul>
		</div>
	);
}
