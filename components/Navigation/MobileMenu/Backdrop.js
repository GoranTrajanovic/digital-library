import styles from "./Backdrop.module.sass";

const Backdrop = ({ click }) => (
	<div className={styles.backdrop} onClick={click}></div>
);

export default Backdrop;
