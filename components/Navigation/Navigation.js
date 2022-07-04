import Link from "next/link";
import { useModalStore } from "../../stores/useModalStore/useModalStore";
import ButtonCTA from "../Buttons/ButtonCTA/ButtonCTA";
import ButtonText from "../Buttons/ButtonText/ButtonText";
import MobileMenu from "./MobileMenu/MobileMenu";
import styles from "./Navigation.module.sass";

export default function Navigation({ type, buttonTextColor }) {
	const toggleShow = useModalStore(s => s.toggleShow);
	const CSSclass = `${styles["wrapper"]} ${styles["wrapper-" + type]}`;
	const NAVIGATION_LINKS = ["library", "blog", "dashboard", "about"];
	return (
		<>
			{type === "header" && <MobileMenu navigationLinks={NAVIGATION_LINKS} />}
			<nav className={CSSclass} role="navigation">
				{NAVIGATION_LINKS.map(link => {
					return (
						<ButtonText key={link} color={buttonTextColor}>
							<Link href={`/${link}`}>{link}</Link>
						</ButtonText>
					);
				})}
				{type === "footer" && (
					<span>
						<ButtonCTA onPress={toggleShow} />
					</span>
				)}
			</nav>
		</>
	);
}
