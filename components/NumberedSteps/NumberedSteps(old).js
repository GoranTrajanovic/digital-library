import { useState } from "react";
import styles from "./NumberedSteps.module.sass";

export default function NumberedSteps() {
	const SELECTED = 1;
	const [selectedStep, setSelectedStep] = useState("0");

	const clickHandler = e => {
		console.log(e.target.textContent);
		setSelectedStep(e.target.textContent);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<span
					className={`${styles.hidden} ${
						styles[selectedStep === "0" ? "selected" : ""]
					}`}
				></span>
				<span
					onClick={clickHandler}
					className={styles[selectedStep === "1" ? "selected" : ""]}
				>
					1
				</span>
				<span
					className={`${styles.line} ${
						styles[selectedStep === "2" || selectedStep === "3" ? "blue" : ""]
					}`}
				></span>
				<span
					onClick={clickHandler}
					className={styles[selectedStep === "2" ? "selected" : ""]}
				>
					2
				</span>
				<span
					className={`${styles.line} ${
						styles[selectedStep === "3" ? "blue" : ""]
					}`}
				></span>
				<span
					onClick={clickHandler}
					className={styles[selectedStep === "3" ? "selected" : ""]}
				>
					3
				</span>
			</div>
		</>
	);
}
