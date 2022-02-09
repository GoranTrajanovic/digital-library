import styles from "./HCTitle.module.sass";

export default function HCTitle({ children }) {
	return (
		<>
			<div className={styles["title-wrapper"]}>
				<h3>{children}</h3>
				<span>, includes:</span>
			</div>
		</>
	);
}
