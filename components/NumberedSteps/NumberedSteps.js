import { useState } from "react";
import { useModalStore } from "../../modules/CtaModal/ModalState";
import styles from "./NumberedSteps.module.sass";

export default function NumberedSteps() {
	const currentStep = useModalStore(s => s.currentStep);

	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles[currentStep === 1 ? "selected" : ""]}>1</span>
				<span
					className={`${styles.line} ${
						styles[currentStep === 2 || currentStep === 3 ? "blue" : ""]
					}`}
				></span>
				<span className={styles[currentStep === 2 ? "selected" : ""]}>2</span>
				<span
					className={`${styles.line} ${
						styles[currentStep === 3 ? "blue" : ""]
					}`}
				></span>
				<span className={styles[currentStep === 3 ? "selected" : ""]}>3</span>
			</div>
		</>
	);
}
