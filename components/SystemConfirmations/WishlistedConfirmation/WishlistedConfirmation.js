import Link from "next/link";
import styles from "./WishlistedConfirmation.module.sass";
export default function WishlistedConfirmation() {
	return (
		<div className={styles.wrapper}>
			Wishlisted!{" "}
			<Link href="/dashboard">
				<a>View dashboard</a>
			</Link>
		</div>
	);
}
