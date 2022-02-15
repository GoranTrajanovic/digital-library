import styles from "./SearchBar.module.sass";

export default function SearchBar() {
	return (
		<>
			<div className={styles.content}>
				<div className={styles["input-wrapper"]}>
					<span></span>
					<input
						className={styles["search-bar"]}
						placeholder="e.g. youtube, design, web, python..."
					></input>
				</div>
			</div>
		</>
	);
}
