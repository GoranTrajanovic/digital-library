import styles from "./ButtonCTA.module.sass";

export default function ButtonCTA({ onPress }) {
	return (
		<>
			<button className={styles.button} onClick={onPress}>
				Get Started
			</button>
		</>
	);
}
