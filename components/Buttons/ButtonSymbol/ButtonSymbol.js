import styles from "./ButtonSymbol.module.sass";

export default function ButtonSymbol({ showWishlisted, onPress }) {
	return (
		<>
			<button
				className={`${styles.button} ${
					styles[showWishlisted ? "wishlisted" : ""]
				}`}
				onClick={onPress}
			></button>
		</>
	);
}
