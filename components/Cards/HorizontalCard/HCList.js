import styles from "./HCList.module.sass";
export default function HCList() {
	const LIST = [
		"5 Top-rated YouTube channels",
		"3 Top-rated blogs",
		"Various other resources",
	];
	return (
		<>
			<ul className={styles["list-wrapper"]}>
				{LIST.map(item => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</>
	);
}
