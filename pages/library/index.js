import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useItemsStore } from "../../stores/useItemsStore/useItemsStore";
import { useLibraryStore } from "../../stores/useLibraryStore/useLibraryStore";
import useMediaQuery from "../../hooks/useMediaQuery";
import ImageCustom from "../../components/ImageCustom/ImageCustom";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategorySelectionButtons from "../../components/CategorySelectionButtons/CategorySelectionButtons";
import Title from "../../components/Title/Title";
import VerticalCardsLayout from "../../modules/VerticalCardsLayout/VerticalCardsLayout";
import styles from "./Library.module.sass";

export default function Library({ items }) {
	const chosenCategoryForFilter = useLibraryStore(
		s => s.chosenCategoryForFilter
	);
	const itemsForView = useLibraryStore(s => s.itemsForView);
	const setItemsForView = useLibraryStore(s => s.setItemsForView);
	const setChosenCategoryForFilter = useLibraryStore(
		s => s.setChosenCategoryForFilter
	);
	const allItems = useLibraryStore(s => s.allItems);
	const setAllItems = useLibraryStore(s => s.setAllItems);
	// let tempItemsArray = [
	// 	{
	// 		type: "start",
	// 		title: "Learn MERN Stack in 2022",
	// 		imgSrc: "/card-images/design.png",
	// 		iconType: "course-free",
	// 		viewCount: 120000,
	// 		date: "April 23, 2021",
	// 		category: "Programming",
	// 		publisher: "Travery Media",
	// 	},
	// ];
	let tempItemsArray = [];
	const IS_MOBILE = useMediaQuery(599);
	const imgAttributes = {
		src: IS_MOBILE
			? "/library-images/library+robot_mobile.png"
			: "/library-images/library+robot.png",
		width: IS_MOBILE ? 600 : 966,
		height: IS_MOBILE ? 256 : 343,
	};

	const fetchedItems = useItemsStore(s => s.fetchedItems);
	const fetchItemsFromServer = useItemsStore(s => s.fetchItemsFromServer);
	fetchItemsFromServer(items);

	const [searchValue, setSearchValue] = useState("");
	const [allItemsInCategory, setAllItemsInCategory] = useState([]);
	const searchHandler = e => {
		let lowerCase = e.target.value.toLowerCase();
		setSearchValue(() => lowerCase);
	};

	useEffect(() => {
		// console.dir(fetchedItems);

		if (Object.keys(fetchedItems[0]).length) {
			tempItemsArray = fetchedItems.map((item, i) => ({
				type: "start",
				title: item.fields.title,
				iconType: item.fields.iconType,
				urlLink: item.fields.urlLink,
				imgSrc: "https:" + item.fields.image.fields.file.url,
				viewCount: item.fields.viewCount,
				date: item.fields.datePublished.substr(0, 10),
				category: item.fields.category,
				publisher: item.fields.publisher,
			}));
			setAllItems(tempItemsArray);
		}
	}, []);

	// console.log(chosenCategoryForFilter);

	useEffect(() => {
		tempItemsArray = allItems.filter(item => {
			// console.log(item);
			// console.log(
			// 	"comparing: " +
			// 		item.category.toLowerCase() +
			// 		" and " +
			// 		chosenCategoryForFilter.title.toLowerCase()
			// );
			return (
				item.category.toLowerCase() ===
				chosenCategoryForFilter.title.toLowerCase()
			);
		});
		setAllItemsInCategory(tempItemsArray);
		setItemsForView(tempItemsArray);
	}, [chosenCategoryForFilter]);

	useEffect(() => {
		if (searchValue === "") {
			// let lastItems = allItemsInCategory;
			// console.log("obj table:");
			// console.table(allItemsInCategory);
			setItemsForView(allItemsInCategory);
		} else {
			tempItemsArray = allItemsInCategory.filter(item => {
				return (
					item.title.toLowerCase().includes(searchValue) ||
					item.iconType.toLowerCase().includes(searchValue) ||
					item.publisher.toLowerCase().includes(searchValue)
				);
			});
			setItemsForView(tempItemsArray);
		}
	}, [searchValue]);

	// setItemsForView(allItems);
	// console.dir(tempItemsArray);

	// const testObject = {
	// 	viewCount: 120000,
	// 	date: "April 23, 2021",
	// 	category: "Programming",
	// 	subcategory: "Algorithms",
	// };

	// constObj = [
	// 	{
	// 		type: "resume",
	// 		title: "design",
	// 		imgSrc: "/card-images/design.png",
	// 		iconType: "youtube",
	// 	: testObject,
	// 	},

	// console.dir(chosenCategoryForFilter);
	// console.log("Thats what we got from setChosenCategoryForFilter");

	return (
		<div className={styles.wrapper}>
			<ImageCustom
				src={imgAttributes.src}
				alt={"Robot waving from library."}
				width={imgAttributes.width}
				height={imgAttributes.height}
			>
				<h1>Library</h1>
			</ImageCustom>
			<div className={styles["section-group-wrapper"]}>
				<SearchBar searchValue={searchValue} searchHandler={searchHandler} />
				<CategorySelectionButtons />
				<Title>{chosenCategoryForFilter.title}</Title>
				<div className={styles.description}>
					<span className={styles.description}>
						{chosenCategoryForFilter.description}
					</span>
					<span className={styles.descriptionSource}>
						{chosenCategoryForFilter.descriptionSource}
					</span>
				</div>
				<VerticalCardsLayout itemsForView={itemsForView} />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const res = await client.getEntries({ content_type: "contentItem" });

	return {
		props: {
			items: res.items,
		},
	};
}
