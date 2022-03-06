import { useModalStore } from "../../stores/useModalStore/useModalStore";
import ButtonCTA from "../Buttons/ButtonCTA/ButtonCTA";
import styles from "./HomePageDescription.module.sass";

export default function HomePageDescription() {
	const toggleShow = useModalStore(s => s.toggleShow);
	return (
		<div className={styles.wrapper}>
			<div className={styles["description-wrapper"]}>
				<div>
					<img src="/home-images/discover.png" alt="Telescope_icon" />
					<span className={styles.title}>discover</span>
				</div>
				<div className={styles.line}></div>
				<div>
					<img src="/home-images/organize.png" alt="Pen_paper_icon" />
					<span className={styles.title}>organize</span>
				</div>
				<div className={styles.line}></div>
				<div>
					<img src="/home-images/measure.png" alt="Graph_icon" />
					<span className={styles.title}>measure</span>
				</div>
			</div>
			<ButtonCTA onPress={toggleShow} />
		</div>
	);
}
