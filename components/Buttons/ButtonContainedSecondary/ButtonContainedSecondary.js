import styles from "./ButtonContainedSecondary.module.sass";

export default function ButtonContainedSecondary({
	children,
	selected,
	click,
}) {
	return (
		<>
			<button
				className={styles["button" + (selected ? "-selected" : "")]}
				onClick={click}
			>
				{children}
			</button>
		</>
	);
}
