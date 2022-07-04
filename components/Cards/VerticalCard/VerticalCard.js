import { useState } from "react";
import ImageCustom from "../../ImageCustom/ImageCustom";
import VerticalCardOverlay from "./VerticalCardOverlay";
import VCList from "./VCList";
import VCTitle from "./VCTitle";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import ButtonSymbol from "../../Buttons/ButtonSymbol/ButtonSymbol";
import WishlistedConfirmation from "../../SystemConfirmations/WishlistedConfirmation/WishlistedConfirmation";
import WishlistRemovalConfirmation from "../../SystemConfirmations/WishlistRemovalConfirmation/WishlistRemovalConfirmation";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { usePersonalStore } from "../../../stores/usePersonalStore/usePersonalStore";
import styles from "./VerticalCard.module.sass";
import { useEffect } from "react";

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
	isWishlisted,
}) {
	const contentItemsWishlisted = usePersonalStore(
		s => s.contentItemsWishlisted
	);
	const blogItemsWishlisted = usePersonalStore(s => s.blogItemsWishlisted);
	const itemsInProgress = usePersonalStore(s => s.itemsInProgress);
	const itemsCompleted = usePersonalStore(s => s.itemsCompleted);
	const [cardIsHovered, setCardIsHovered] = useState(false);
	const [showWishlisted, setShowWishlisted] = useState(
		checkItemInArray(title, [...contentItemsWishlisted, ...blogItemsWishlisted])
	);
	const [notifyWishlisted, setNotifyWishlisted] = useState(null);
	const [notifyUnwishlisted, setNotifyUnwishlisted] = useState(null);
	const [showRemoveButton, setShowRemoveButton] = useState(false);
	const BOOL_SCREEN_UNDER_WIDTH = useMediaQuery(906);

	const addContentItemWishlisted = usePersonalStore(
		s => s.addContentItemWishlisted
	);
	const addBlogItemWishlisted = usePersonalStore(s => s.addBlogItemWishlisted);
	const addItemInProgress = usePersonalStore(s => s.addItemInProgress);
	const addItemCompleted = usePersonalStore(s => s.addItemCompleted);

	const removeContentItemWishlisted = usePersonalStore(
		s => s.removeContentItemWishlisted
	);
	const removeBlogItemWishlisted = usePersonalStore(
		s => s.removeBlogItemWishlisted
	);
	const removeItemInProgress = usePersonalStore(s => s.removeItemInProgress);
	const removeItemCompleted = usePersonalStore(s => s.removeItemCompleted);

	const addBlogWishlistHandler = () => {
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

		addBlogItemWishlisted({
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
			isWishlisted: true,
		});

		setNotifyUnwishlisted(false);
		setNotifyWishlisted(true);

		////
		////
		// handle functionality (via item ID), problematic is when HorizontalCard gets turned to Vertical, cross check IDs again
	};

	const removeBlogWishlistHandler = () => {
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

		removeBlogItemWishlisted(title);
		setNotifyWishlisted(false);
		setNotifyUnwishlisted(true);
	};

	const wishlistToggleHandler = () => {
		if (showWishlisted) {
			removeContentItemWishlisted(title);
			setNotifyWishlisted(false);
			setNotifyUnwishlisted(true);
		} else {
			addContentItemWishlisted({
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
				isWishlisted: true,
			});
			setNotifyUnwishlisted(false);
			setNotifyWishlisted(true);
		}

		setShowWishlisted(prevState => !prevState);
	};

	const itemCompletedHandler = () => {
		addItemCompleted({
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
		});
		removeItemInProgress(title);
	};

	const cardDetails = {
		date,
		category,
		subCategory,
		publisher,
		viewCount,
		imgSrc,
	};

	const detailsList = [
		"5 Top-rated YouTube channels",
		"3 Top-rated blogs",
		"Various other resources",
	];

	const startButtonHandler = () => {
		window.open(urlLink, "_newtab");
		type = "resume";
		addItemInProgress({
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
		});
	};

	const resumeButtonHandler = () => {
		window.open(urlLink, "_newtab");
		type = "resume";
		// addItemInProgress({
		// 	type,
		// 	imgSrc,
		// 	title,
		// 	iconType,
		// 	viewCount,
		// 	date,
		// 	category,
		// 	subCategory,
		// 	publisher,
		// 	urlLink,
		// });
	};

	const restartButtonHandler = () => {
		removeItemCompleted(title);
		window.open(urlLink, "_newtab");
		type = "resume";
		addItemInProgress({
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
		});
	};

	if (type === "read-more") {
		return (
			<>
				{notifyWishlisted && !notifyUnwishlisted && <WishlistedConfirmation />}
				{notifyUnwishlisted && !notifyWishlisted && (
					<WishlistRemovalConfirmation />
				)}
				{/* {showWishlisted && <WishlistedConfirmation />}
				{showWishlisted === false ? <WishlistRemovalConfirmation /> : ""} */}
				<div className={`${styles["card-wrapper"]}`}>
					<VCTitle>{title}</VCTitle>
					<ImageCustom src={imgSrc} alt={title} width={200} height={120} />
					<span>includes:</span>
					<VCList cardDetails={detailsList} />
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
							onPress={addBlogWishlistHandler}
						>
							{showWishlisted ? "Added" : "Wishlist"}
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
						<button
							onClick={removeBlogWishlistHandler}
							className={`${styles.removeButton} ${
								!showRemoveButton && !showWishlisted ? styles.hidden : ""
							}`}
						>
							Remove
						</button>
						{/* {showRemoveButton ? (
							<button
								onClick={wishlistHandler}
								className={`${styles.removeButton} ${styles.show}`}
							>
								Remove
							</button>
						) : (
							<button className={`${styles.removeButton} ${styles.hidden}`}>Remove</button>
						)} */}
					</div>
				</div>
			</>
		);
	} else {
		let ACTION = type;
		let STATUS = "blank";
		let actionHandler = "startButtonHandler";

		if (checkItemInArray(title, itemsInProgress)) {
			ACTION = "resume";
			actionHandler = "resumeButtonHandler";
		} else if (checkItemInArray(title, itemsCompleted)) {
			ACTION = "completed";
			actionHandler = "";
		}

		console.log(ACTION);

		switch (ACTION) {
			case "start":
				STATUS = "ready!";
				break;
			case "resume":
				STATUS = "in-progress";
				break;
			case "completed":
				STATUS = "";
				break;
		}

		const ActionWrapperClassName = `${
			ACTION === "start"
				? styles["action-wrapper-start"]
				: styles["action-wrapper"]
		} ${
			ACTION === "resume"
				? styles["action-wrapper-resume"]
				: styles["action-wrapper"]
		} ${
			ACTION === "completed"
				? styles["action-wrapper-completed"]
				: styles["action-wrapper"]
		} ${cardIsHovered && styles["extend"]}`;

		console.log("ACTION for " + title + " is " + ACTION);

		const ActionWrapper = (
			<div className={ActionWrapperClassName}>
				{ACTION === "start" ? (
					<ButtonSymbol
						showWishlisted={showWishlisted}
						onPress={wishlistToggleHandler}
					/>
				) : (
					""
				)}
				{ACTION === "resume" ? (
					<ButtonContainedPrimary
						type={`mark-as-completed`}
						onPress={itemCompletedHandler}
					>
						Mark as Completed
					</ButtonContainedPrimary>
				) : (
					""
				)}
				{ACTION === "completed" ? (
					<ButtonContainedPrimary
						type={`restart`}
						onPress={restartButtonHandler}
					>
						Restart
					</ButtonContainedPrimary>
				) : (
					""
				)}
				{/* <ButtonSymbol
					showWishlisted={showWishlisted}
					onPress={wishlistHandler}
				/> */}
				<ButtonContainedPrimary
					type={`symbol-right-${ACTION}`}
					// onPress={startButtonHandler}
					onPress={
						ACTION === "start"
							? startButtonHandler
							: ACTION === "resume"
							? resumeButtonHandler
							: ""
					}
				>
					{ACTION}
				</ButtonContainedPrimary>
			</div>
		);

		return (
			<>
				{notifyWishlisted && !notifyUnwishlisted && <WishlistedConfirmation />}
				{notifyUnwishlisted && !notifyWishlisted && (
					<WishlistRemovalConfirmation />
				)}
				{/* {showWishlisted && <WishlistedConfirmation />}
				{showWishlisted === false ? <WishlistRemovalConfirmation /> : ""} */}
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

function checkItemInArray(title, itemsArray) {
	// itemsArray.map(item => {
	// 	console.log(`Checking ${item.title} against ${title}`);
	// });
	console.log(itemsArray.findIndex(item => item.title === title) !== -1);
	return itemsArray.findIndex(item => item.title === title) !== -1;
}
