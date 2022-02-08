import styles from "./ButtonText.module.sass";

export default function ButtonText({ color, boolDarkBackground }) {
	let determinedClassName = "button";
	determinedClassName =
		color === "light" ? "button-light" : determinedClassName;
	determinedClassName = boolDarkBackground
		? "button-light-on-dark-bg"
		: determinedClassName;
	return (
		<>
			<button className={styles[determinedClassName]}>Link</button>
		</>
	);
}
