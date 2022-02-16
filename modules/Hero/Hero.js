import { useContext } from "react";
import ButtonCTA from "../../components/Buttons/ButtonCTA/ButtonCTA";
import styles from "./Hero.module.sass";
import { ModalShowContext } from "../Layout/Layout";
import { useModalStore } from "../CtaModal/ModalState";

export default function Hero() {
	const { showModal, setShowModal } = useContext(ModalShowContext);
	const toggleShow = useModalStore(s => s.toggleShow);

	console.log("modal bool from Hero: " + showModal);

	const handleCTA = () => {
		toggleShow();
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles["wrapper-text-align"]}>
				<h1>
					Library your <span>web resources.</span>
				</h1>
				<ButtonCTA onPress={toggleShow} />
			</div>
			<img src="/home-images/hero.jpg" alt="Person_at_a_computer" />
		</div>
	);
}
