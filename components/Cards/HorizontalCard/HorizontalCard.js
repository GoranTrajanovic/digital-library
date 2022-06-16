import { useEffect, useState } from "react";
import ImageCustom from "../../ImageCustom/ImageCustom";
import HCTitle from "./HCTitle";
import HCList from "./HCList";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import WishlistedConfirmation from "../../SystemConfirmations/WishlistedConfirmation/WishlistedConfirmation";
import WishlistRemovalConfirmation from "../../SystemConfirmations/WishlistRemovalConfirmation/WishlistRemovalConfirmation";
import styles from "./HorizontalCard.module.sass";

export default function HorizontalCard({ title, imgSrc, detailsList }) {
	const [showWishlisted, setShowWishlisted] = useState(null);
	const [showRemoveButton, setShowRemoveButton] = useState(false);

	// const setTimeForWishlist = () => {
	// 	setShowWishlisted(true);
	// 	wishlistConfirmationExpiryTimer = setTimeout(
	// 		() => setShowWishlisted(false),
	// 		3500
	// 	);
	// 	////
	// 	////
	// 	// handle functionality
	// add box-shadow: 0px 10px 33px rgba(19, 186, 146, 0.3) to card-wrapper
	// };
	const addWishlistHandler = () => {
		setShowWishlisted(prevState => {
			if (prevState) {
				return prevState;
			} else {
				// alert("Wishlisted!");
				return !prevState;
			}
		});

		setShowRemoveButton(prevState => {
			if (prevState) {
				return prevState;
			} else {
				// alert("Removed!");
				return !prevState;
			}
		});

		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};

	const removeWishlistHandler = () => {
		setShowWishlisted(prevState => {
			if (prevState) {
				return !prevState;
			} else {
				// alert("Wishlisted!");
				return prevState;
			}
		});

		setShowRemoveButton(prevState => {
			if (prevState) {
				// alert("Removed!");
				return !prevState;
			} else {
				return prevState;
			}
		});
	};
	return (
		<>
			{showWishlisted && <WishlistedConfirmation />}
			{showWishlisted === false ? <WishlistRemovalConfirmation /> : ""}
			<div className={styles["card-wrapper"]}>
				<ImageCustom src={imgSrc} alt={title} width={250} height={200} />
				<div className={styles["card-details-wrapper"]}>
					<div className={styles["text-wrapper"]}>
						<HCTitle>{title}</HCTitle>
						<HCList detailsList={detailsList} />
					</div>
					<div className={styles["buttons-wrapper"]}>
						<ButtonOutlinedPrimary
							type={
								showWishlisted
									? "confirmation-turn-to-green"
									: "symbol-left-bookmark"
							}
							onPress={addWishlistHandler}
						>
							{showWishlisted ? "Added" : "Wishlist"}
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
						<button
							onClick={removeWishlistHandler}
							className={`${styles.removeButton} ${
								!showRemoveButton ? styles.hidden : ""
							}`}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
