import Navigation from "../../components/Navigation/Navigation";
import styles from "./Header.module.sass";

export default function Header() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}></div>
			<Navigation type={"header"} />
		</div>
	);
}
