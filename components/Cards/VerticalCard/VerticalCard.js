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
	viewCount,
	date,
	category,
	subCategory,
	publisher,
	urlLink,
}) {
	const [cardIsHovered, setCardIsHovered] = useState(false);
	const [showWishlisted, setShowWishlisted] = useState(false);
	const BOOL_SCREEN_UNDER_WIDTH = useMediaQuery(906);
	const wishlistHandler = () => {
		setShowWishlisted(prevState => !prevState);
		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};

	const cardDetails = {
		date,
		category,
		subCategory,
		publisher,
		viewCount,
	};

	const startButtonHandler = () => {
		console.log("about to open" + urlLink);
		window.open(urlLink, "_newtab");
		type = "resume";
	};

	if (type === "read-more") {
		return (
			<>
				<div className={`${styles["card-wrapper"]}`}>
					<VCTitle>{title}</VCTitle>
					<ImageCustom
						src={"/card-images/design.png"}
						alt={title}
						width={200}
						height={120}
					/>
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

		const ActionWrapperClassName = `${
			ACTION === "start"
				? styles["action-wrapper-start"]
				: styles["action-wrapper"]
		} ${cardIsHovered && styles["extend"]}`;

		const ActionWrapper = (
			<div className={ActionWrapperClassName}>
				{type === "start" ? (
					<ButtonSymbol
						showWishlisted={showWishlisted}
						onPress={wishlistHandler}
					/>
				) : (
					""
				)}
				{/* <ButtonSymbol
					showWishlisted={showWishlisted}
					onPress={wishlistHandler}
				/> */}
				<ButtonContainedPrimary
					type={`symbol-right-${ACTION}`}
					onPress={startButtonHandler}
				>
					{ACTION}
				</ButtonContainedPrimary>
			</div>
		);

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
						width={BOOL_SCREEN_UNDER_WIDTH ? 150 : 200}
						height={BOOL_SCREEN_UNDER_WIDTH ? 90 : 120}
					/>
					{/* <img src={imgSrc} alt={title} /> */}
					<ul className={styles["mobile-card-details"]}>
						<li>{new Intl.NumberFormat().format(cardDetails.viewCount)}</li>
						<li>{cardDetails.date}</li>
					</ul>
					{ActionWrapper}
					<span
						className={
							ACTION === "start" && cardIsHovered
								? styles[STATUS.replace("!", "") + "-on-overlay"]
								: styles[STATUS]
						}
					>
						{STATUS.replace("-", " ")}
					</span>
				</div>
			</>
		);
	}
}
