import styles from "./ButtonOutlinedPrimary.module.sass";

export default function ButtonOutlinedPrimary({ children, type, onPress }) {
	return (
		<>
			<button
				className={styles["button" + (type ? "-" + type : "")]}
				onClick={onPress}
			>
				{children}
			</button>
		</>
	);
}
