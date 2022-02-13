import { useState } from "react";
import ImageCustom from "../../ImageCustom/ImageCustom";
import HCTitle from "./HCTitle";
import HCList from "./HCList";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import styles from "./HorizontalCard.module.sass";

export default function HorizontalCard({ title, imgSrc, detailsList }) {
	const [showWishlisted, setShowWishlisted] = useState(false);
	// const setTimeForWishlist = () => {
	// 	setShowWishlisted(true);
	// 	wishlistConfirmationExpiryTimer = setTimeout(
	// 		() => setShowWishlisted(false),
	// 		3500
	// 	);
	// 	////
	// 	////
	// 	// handle functionality
	// };
	const wishlistHandler = () => {
		setShowWishlisted(true);
		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};
	return (
		<>
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
							onPress={wishlistHandler}
						>
							{showWishlisted ? "Wishlisted" : "Wishlist"}
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
					</div>
				</div>
			</div>
			{/* <Wishlisted shouldShow={showWishlisted} /> */}
		</>
	);
}
