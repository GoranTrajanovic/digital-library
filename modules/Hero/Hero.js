import { useContext } from "react";
import ButtonCTA from "../../components/Buttons/ButtonCTA/ButtonCTA";
import styles from "./Hero.module.sass";
import { ModalShowContext } from "../Layout/Layout";
import { useModalStore } from "../../stores/useModalStore/useModalStore";
import AnimatedText from "react-animated-text-content";

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
				{/* <h1>
					Library your <span>web resources.</span>
				</h1> */}
				<AnimatedText
					type="words" // animate words or chars
					animation={{
						ease: "ease-in-out",
					}}
					animationType="blocks"
					interval={0.1}
					duration={1.2}
					tag="h1"
					className="animated-paragraph"
					threshold={0.1}
					rootMargin="20%"
				>
					Library your
				</AnimatedText>
				<AnimatedText
					type="words" // animate words or chars
					animation={{
						ease: "ease-in-out",
					}}
					animationType="blocks"
					interval={0.1}
					duration={1.2}
					tag="span"
					className="animated-paragraph"
					threshold={0.1}
					rootMargin="20%"
				>
					web resources.
				</AnimatedText>
				<ButtonCTA onPress={toggleShow} />
			</div>
			<img src="/home-images/hero.jpg" alt="Person_at_a_computer" />
		</div>
	);
}
