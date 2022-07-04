import Link from "next/link";
import { useEffect, useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ImageCustom from "../../ImageCustom/ImageCustom";
import WishlistedConfirmation from "../../SystemConfirmations/WishlistedConfirmation/WishlistedConfirmation";
import WishlistRemovalConfirmation from "../../SystemConfirmations/WishlistRemovalConfirmation/WishlistRemovalConfirmation";
import Title from "../../Title/Title";
import styles from "./BlogCard.module.sass";

export default function BlogCard({ blogData, slug }) {
	const [showWishlisted, setShowWishlisted] = useState(null);
	const tabletRearange = useMediaQuery(750) ? true : false;
	const [showRemoveButton, setShowRemoveButton] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);
	const { title, datePublished, coverImageURL, content } = blogData;
	let foundFirstParagraph = false;
	const excerptCharacterCount = screenWidth < 800 ? 125 : screenWidth / 5;
	const [contentExcerpt] = content.map(dataItem => {
		if (!foundFirstParagraph && dataItem.nodeType === "paragraph") {
			foundFirstParagraph = true;
			return dataItem.content[0].value.slice(0, excerptCharacterCount);
		}
	});

	useEffect(() => {
		const handleResize = e => {
			setScreenWidth(s => window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

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
			<div className={styles.cardWrapper}>
				{tabletRearange ? (
					""
				) : (
					<ImageCustom
						src={"https:" + coverImageURL}
						alt={"Blog image: " + title}
						width={250}
						height={165}
					/>
				)}
				<div className={styles.detailsWrapper}>
					<div className={styles.detailsTopsideWrapper}>
						<Title>{title}</Title>
						<div className={styles.dateWrapper}>
							<span className={styles.calendarIcon}></span>
							<span>{datePublished.substr(0, 10)}</span>
						</div>
					</div>

					{tabletRearange ? (
						<ImageCustom
							src={"https:" + coverImageURL}
							alt={"Blog image: " + title}
							width={250}
							height={165}
						/>
					) : (
						""
					)}
					<p>{contentExcerpt}...</p>
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
						<Link href={`/blog/${slug}`}>
							<a>
								<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
							</a>
						</Link>

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
