import { useState } from "react";
import Backdrop from "./Backdrop";
import DrawerToggleButton from "./DrawerToggleButton";
// import styles from "./MobileMenu.module.sass";
import { SideDrawer } from "./SideDrawer";

export default function MobileMenu({ navigationLinks }) {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerClickHandler = () => {
		setSideDrawerOpen(s => !s);
	};
	const backdropClickHandler = () => {
		setSideDrawerOpen(s => false);
	};

	return (
		<>
			<DrawerToggleButton click={drawerClickHandler} active={sideDrawerOpen} />
			{sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
			<SideDrawer show={sideDrawerOpen} navigationLinks={navigationLinks} />
		</>
	);
}
