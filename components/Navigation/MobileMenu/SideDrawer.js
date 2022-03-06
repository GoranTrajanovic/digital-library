import Link from "next/link";
import styles from "./SideDrawer.module.sass";

export const SideDrawer = ({ show, navigationLinks, linkClickHandler }) => {
	return (
		<nav className={`${styles["side-drawer"]} ${styles[show ? "open" : ""]}`}>
			<ul>
				{navigationLinks.map(item => {
					return (
						<Link href={`/${item}`} key={item}>
							<li>
								<a onClick={linkClickHandler}>{item}</a>
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};
