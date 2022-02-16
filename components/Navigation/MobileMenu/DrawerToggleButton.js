import styles from "./DrawerToggleButton.module.sass";

const DrawerToggleButton = ({ click, active }) => (
	<button
		className={`${styles["toggle-button"]} ${styles[active ? "active" : ""]}`}
		onClick={click}
	>
		<div className={styles["toggle-button__line"]} />
		<div className={styles["toggle-button__line"]} />
		<div className={styles["toggle-button__line"]} />
	</button>
);

export default DrawerToggleButton;
