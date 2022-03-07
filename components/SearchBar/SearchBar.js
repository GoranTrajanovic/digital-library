import { useState } from "react";
import styles from "./SearchBar.module.sass";

export default function SearchBar({ searchValue, searchHandler }) {
	return (
		<>
			<div className={styles.content}>
				<div className={styles["input-wrapper"]}>
					<span></span>
					<input
						className={styles["search-bar"]}
						placeholder="e.g. youtube, design, web, python..."
						onChange={searchHandler}
						value={searchValue}
					></input>
				</div>
			</div>
		</>
	);
}
