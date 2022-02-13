import styles from "./HCList.module.sass";
export default function HCList({ detailsList }) {
	return (
		<>
			<ul className={styles["list-wrapper"]}>
				{detailsList.map(item => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</>
	);
}
