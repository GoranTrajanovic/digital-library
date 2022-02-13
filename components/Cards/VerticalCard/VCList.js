import styles from "./VCList.module.sass";

export default function VCList({ cardDetails }) {
	return (
		<>
			<ul className={styles["list-wrapper"]}>
				{cardDetails.map(item => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</>
	);
}
