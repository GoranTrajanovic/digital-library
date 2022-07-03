import Navigation from "../../components/Navigation/Navigation";
import styles from "./Footer.module.sass";

export default function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}></div>
			<div className={styles["buttons-and-credits-wrapper"]}>
				<Navigation type={"footer"} buttonTextColor={"light"} />
				<div className={styles.credits}>
					<span>admin@diglib.com</span>
					<span>Ⓒ 2022 All rights reserved.</span>
				</div>
			</div>
		</div>
	);
}

// export default function Footer() {
// 	return (
// 		<div className={styles.wrapper}>
// 			<div className={styles.logo}></div>
// 			<div className={styles["buttons-and-credits-wrapper"]}>
// 				<Navigation type={"footer"} buttonTextColor={"light"} />
// 				<div className={styles.credits}>
// 					<span>admin@diglib.com</span>
// 					<span>Ⓒ 2021 All rights reserved.</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
