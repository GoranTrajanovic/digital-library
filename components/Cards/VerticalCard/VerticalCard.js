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

export default function VerticalCard({
	type,
	imgSrc,
	title,
	iconType,
	cardDetails,
}) {
	const [cardIsHovered, setCardIsHovered] = useState(false);
	const [showWishlisted, setShowWishlisted] = useState(false);
	const wishlistHandler = () => {
		setShowWishlisted(true);
		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};
	if (type === "read-more") {
		return (
			<>
				<div className={`${styles["card-wrapper"]}`}>
					<VCTitle>{title}</VCTitle>
					<ImageCustom src={imgSrc} alt={title} width={200} height={150} />
					<span>includes:</span>
					<VCList cardDetails={cardDetails} />
					<div
						className={`${styles["buttons-wrapper"]}  ${styles["flex-column"]}`}
					>
						<ButtonOutlinedPrimary
							type={
								showWishlisted
									? "confirmation-turn-to-green"
									: "symbol-left-bookmark"
							}
							style={{ width: "5px" }}
							onPress={wishlistHandler}
						>
							{showWishlisted ? "Wishlisted" : "Wishlist"}
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
					</div>
				</div>
			</>
		);
	} else {
		const ACTION = type;
		let STATUS = "blank";
		switch (ACTION) {
			case "start":
				STATUS = "ready!";
				break;
			case "resume":
				STATUS = "in-progress";
				break;
			case "review":
				STATUS = "completed";
				break;
		}
		return (
			<>
				<div
					className={styles["card-wrapper"]}
					onMouseEnter={() => setCardIsHovered(true)}
					onMouseLeave={() => setCardIsHovered(false)}
				>
					<VerticalCardOverlay
						cardIsHovered={cardIsHovered}
						cardDetails={cardDetails}
					/>
					<VCTitle iconType={iconType} cardIsHovered={cardIsHovered}>
						{title}
					</VCTitle>
					<ImageCustom
						src={imgSrc}
						alt={title}
						width={useMediaQuery(906) ? 150 : 200}
						height={useMediaQuery(906) ? 100 : 150}
					/>
					{/* <img src={imgSrc} alt={title} /> */}
					<ul className={styles["mobile-card-details"]}>
						<li>{new Intl.NumberFormat().format(cardDetails.viewCount)}</li>
						<li>{cardDetails.date}</li>
					</ul>
					<div
						className={`${styles["action-wrapper"]} ${
							cardIsHovered && styles["extend"]
						}`}
					>
						<ButtonSymbol
							showWishlisted={showWishlisted}
							onPress={wishlistHandler}
						/>
						<ButtonContainedPrimary type={`symbol-right-${ACTION}`}>
							{ACTION}
						</ButtonContainedPrimary>
					</div>
					<span className={styles[STATUS.replace("!", "")]}>
						{STATUS.replace("-", " ")}
					</span>
				</div>
			</>
		);
	}
}
