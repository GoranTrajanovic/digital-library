import ButtonCTA from "../../components/Buttons/ButtonCTA/ButtonCTA";
import styles from "./Hero.module.sass";

export default function Hero() {
	return (
		<div className={styles.wrapper}>
			<div className={styles["wrapper-text-align"]}>
				<h1>
					Library your <span>web resources.</span>
				</h1>
				<ButtonCTA />
			</div>
			<img src="/home-images/hero.jpg" alt="Person_at_a_computer" />
		</div>
	);
}
