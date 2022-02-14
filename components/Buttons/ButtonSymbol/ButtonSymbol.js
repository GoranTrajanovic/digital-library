import styles from "./ButtonSymbol.module.sass";

export default function ButtonSymbol({ showWishlisted, onPress }) {
	console.log("mounted " + showWishlisted);
	return (
		<>
			<button
				className={`${styles.button} ${
					styles[showWishlisted ? "wishlisteeeed" : ""]
				}`}
				onClick={onPress}
			></button>
		</>
	);
}
