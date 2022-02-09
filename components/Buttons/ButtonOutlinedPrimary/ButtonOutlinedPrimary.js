import styles from "./ButtonOutlinedPrimary.module.sass";

export default function ButtonOutlinedPrimary({ children, type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				{children}
			</button>
		</>
	);
}
