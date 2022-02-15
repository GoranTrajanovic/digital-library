import styles from "./ButtonContainedPrimary.module.sass";

export default function ButtonContainedPrimary({ children, type, onPress }) {
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
