import styles from "./ButtonOutlinedPrimary.module.sass";

export default function ButtonOutlinedPrimary({ type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				<span>Read more</span>
			</button>
		</>
	);
}
