import styles from "./ButtonContainedPrimary.module.sass";

export default function ButtonContainedPrimary({ children, type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				{children}
			</button>
		</>
	);
}
