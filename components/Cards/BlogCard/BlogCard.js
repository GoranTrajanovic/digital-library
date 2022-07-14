import Link from "next/link";
import { useEffect, useState } from "react";
import { usePersonalStore } from "../../../stores/usePersonalStore/usePersonalStore";
import useMediaQuery from "../../../hooks/useMediaQuery";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ImageCustom from "../../ImageCustom/ImageCustom";
import WishlistedConfirmation from "../../SystemConfirmations/WishlistedConfirmation/WishlistedConfirmation";
import WishlistRemovalConfirmation from "../../SystemConfirmations/WishlistRemovalConfirmation/WishlistRemovalConfirmation";
import Title from "../../Title/Title";
import styles from "./BlogCard.module.sass";

export default function BlogCard({ blogData, slug }) {
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
	const [showWishlisted, setShowWishlisted] = useState(false);
	const [notifyWishlisted, setNotifyWishlisted] = useState(null);
	const [notifyUnwishlisted, setNotifyUnwishlisted] = useState(null);
	const blogItemsWishlisted = usePersonalStore(s => s.blogItemsWishlisted);
	const addBlogItemWishlisted = usePersonalStore(s => s.addBlogItemWishlisted);
	const removeBlogItemWishlisted = usePersonalStore(
		s => s.removeBlogItemWishlisted
	);

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

		addBlogItemWishlisted({
			title: blogData.title,
			datePublished: blogData.datePublished,
			slug: blogData.slug,
			coverImageURL: blogData.coverImageURL,
			content: blogData.content,
		});
		setNotifyUnwishlisted(false);
		setNotifyWishlisted(true);

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
		removeBlogItemWishlisted(title);
		setNotifyWishlisted(false);
		setNotifyUnwishlisted(true);
	};

	return (
		<>
			{notifyWishlisted && !notifyUnwishlisted && <WishlistedConfirmation />}
			{notifyUnwishlisted && !notifyWishlisted && (
				<WishlistRemovalConfirmation />
			)}
			{/* {showWishlisted && <WishlistedConfirmation />}
			{showWishlisted === false ? <WishlistRemovalConfirmation /> : ""} */}
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
