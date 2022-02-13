import styles from "./ButtonSymbol.module.sass";

export default function ButtonSymbol({ showWishlisted, onPress }) {
	console.log("mounted");
	return (
		<>
			<button
				className={`${styles.button} ${
					showWishlisted === true ? "wishlisted" : ""
				}`}
				onClick={onPress}
			></button>
		</>
	);
}
