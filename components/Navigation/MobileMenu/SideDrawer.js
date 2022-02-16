import styles from "./SideDrawer.module.sass";

export const SideDrawer = ({ show, navigationLinks }) => {
	return (
		<nav className={`${styles["side-drawer"]} ${styles[show ? "open" : ""]}`}>
			<ul>
				{navigationLinks.map(item => {
					return (
						<li>
							<a>{item}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
