import styles from "./ButtonContainedSecondary.module.sass";

export default function ButtonContainedSecondary({ children, selected }) {
	return (
		<>
			<button className={styles["button" + (selected ? "-selected" : "")]}>
				{children ? children : "Read more"}
			</button>
		</>
	);
}
