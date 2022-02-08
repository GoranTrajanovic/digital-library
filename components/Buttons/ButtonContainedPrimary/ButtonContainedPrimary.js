import styles from "./ButtonContainedPrimary.module.sass";

export default function ButtonContainedPrimary({ type }) {
	return (
		<>
			<button className={styles["button" + (type ? "-" + type : "")]}>
				<span>Read more</span>
			</button>
		</>
	);
}
