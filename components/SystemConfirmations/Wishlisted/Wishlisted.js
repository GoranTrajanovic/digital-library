import styles from "./Wishlisted.module.sass";
export default function Wishlisted({ shouldShow }) {
	return (
		<>
			{shouldShow && (
				<div className={styles.wrapper}>
					Wishlisted! <a>View dashboard</a>
				</div>
			)}
		</>
	);
}
