import { useState } from "react";
import ImageCustom from "../../ImageCustom/ImageCustom";
import VerticalCardOverlay from "./VerticalCardOverlay";
import VCList from "./VCList";
import VCTitle from "./VCTitle";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import ButtonSymbol from "../../Buttons/ButtonSymbol/ButtonSymbol";
import styles from "./VerticalCard.module.sass";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function VerticalCardSmall({
	id,
	selected,
	title,
	iconType,
	cardDetails,
	onPress,
}) {
	const [showWishlisted, setShowWishlisted] = useState(false);

	const wishlistHandler = () => {
		onPress(id);
		setShowWishlisted(true);
		////
		////
		// handle functionality (via item ID)
	};

	const wishlistCancel = () => {
		onPress(id);
		setShowWishlisted(false);
		////
		////
		// handle functionality (via item ID)
	};

	return (
		<div className={styles["card-wrapper-small"]}>
			<div className={styles["text-wrapper"]}>
				<VCTitle iconType={iconType}>{title}</VCTitle>
				<ul className={styles["mobile-card-details"]}>
					<li>{new Intl.NumberFormat().format(cardDetails.viewCount)}</li>
					<li>{cardDetails.date}</li>
				</ul>
			</div>
			<ButtonOutlinedPrimary
				type={
					showWishlisted || selected
						? "confirmation-turn-to-green"
						: "symbol-right-bookmark-small"
				}
				onPress={wishlistHandler}
			>
				{showWishlisted ? "Wishlisted" : "Wishlist"}
			</ButtonOutlinedPrimary>
			{(showWishlisted || selected) && (
				<button
					className={styles["cancel-button"]}
					onClick={wishlistCancel}
				></button>
			)}
		</div>
	);
}
