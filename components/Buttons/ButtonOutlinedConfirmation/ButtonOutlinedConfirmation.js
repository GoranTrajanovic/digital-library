import styles from "./ButtonOutlinedConfirmation.module.sass";

export default function ButtonOutlinedConfirmation({ children, type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				{children}
			</button>
		</>
	);
}
