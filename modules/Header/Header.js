import Link from "next/Link";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Header.module.sass";

export default function Header() {
	return (
		<div className={styles.wrapper}>
			<Link href="/">
				<div className={styles.logo}></div>
			</Link>
			<Navigation type={"header"} />
		</div>
	);
}
