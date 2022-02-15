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
	type,
	imgSrc,
	title,
	iconType,
	cardDetails,
}) {
	// const BOOL_SCREEN_UNDER_WIDTH = useMediaQuery(906);

	const wishlistHandler = () => {
		setShowWishlisted(true);
		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};

	return (
		<div className={styles["card-wrapper-small"]}>
			<VCTitle iconType={iconType}>{title}</VCTitle>
			<ul className={styles["mobile-card-details"]}>
				<li>{new Intl.NumberFormat().format(cardDetails.viewCount)}</li>
				<li>{cardDetails.date}</li>
			</ul>
			<ButtonOutlinedPrimary type={"symbol-right-bookmark-small"}>
				{" "}
				Wishlist
			</ButtonOutlinedPrimary>
		</div>
	);
}
