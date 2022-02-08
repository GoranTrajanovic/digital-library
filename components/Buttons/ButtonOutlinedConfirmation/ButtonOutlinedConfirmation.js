import styles from "./ButtonOutlinedConfirmation.module.sass";

export default function ButtonOutlinedConfirmation({ type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				<span>Saved</span>
			</button>
		</>
	);
}
