import styles from "./SearchBar.module.sass";

export default function SearchBar() {
	return (
		<>
			<input
				className={styles["search-bar"]}
				placeholder="e.g. youtube, design, web, python..."
			></input>
		</>
	);
}
