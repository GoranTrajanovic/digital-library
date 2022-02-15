import VerticalCard from "../VerticalCard/VerticalCard";
import VerticalCardSmall from "../VerticalCard/VerticalCardSmall";
import styles from "./VerticalCardArticleOptions.module.sass";

export default function VerticalCardArticleOptions() {
	const testObject = {
		viewCount: 120000,
		date: "April 23, 2021",
		category: "Programming",
		subcategory: "Algorithms",
	};

	const cardDetailsObj = [
		{
			type: "small",
			title: "design",
			imgSrc: "/card-images/design.png",
			iconType: "youtube",
			cardDetails: testObject,
		},
		{
			type: "small",
			title: "python programming 101",
			imgSrc: "/card-images/design.png",
			iconType: "course-payed",
			cardDetails: testObject,
		},
		{
			type: "small",
			title: "cryptography",
			imgSrc: "/card-images/design.png",
			iconType: "article",
			cardDetails: testObject,
		},
		{
			type: "small",
			title: "design",
			imgSrc: "/card-images/design.png",
			iconType: "course-free",
			cardDetails: testObject,
		},
	];
	return (
		<div className={styles.wrapper}>
			{cardDetailsObj.map(item => {
				return (
					<VerticalCardSmall
						cardDetails={item.cardDetails}
						imgSrc={item.imgSrc}
						title={item.title}
						iconType={item.iconType}
					/>
				);
			})}
		</div>
	);
}
