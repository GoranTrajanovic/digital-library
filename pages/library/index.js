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
// import { contenfulMimic as items } from "../../stores/useLibraryStore/verticalCardPopulate";

export default function Library({ items }) {
	// export default function Library() {
	console.log("Items passed to component with getStaticProps:");
	console.log(items);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
	// export default function Library() {
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

	let tempItemsArray = [];
	const IS_MOBILE = useMediaQuery(599);
	const imgAttributes = {
		src: IS_MOBILE
			? "/library-images/library_robot_mobile.png"
			: "/library-images/library_robot.png",
		width: IS_MOBILE ? 600 : 966,
		height: IS_MOBILE ? 256 : 343,
	};

	const fetchedItems = useItemsStore(s => s.fetchedItems);
	// const fetchedItems = items;
	const fetchItemsFromServer = useItemsStore(s => s.fetchItemsFromServer);
	fetchItemsFromServer(items);

	const [searchValue, setSearchValue] = useState("");
	const [allItemsInCategory, setAllItemsInCategory] = useState([]);
	const [featuredItemsArray, setFeaturedItemsArray] = useState([]);
	const searchHandler = e => {
		let lowerCase = e.target.value.toLowerCase();
		setSearchValue(() => lowerCase);
	};

	useEffect(() => {
		if (Object.keys(fetchedItems[0]).length) {
			tempItemsArray = fetchedItems.map((item, i) => {
				return {
					type: "start",
					title: item.fields.title,
					iconType: item.fields.iconType,
					urlLink: item.fields.urlLink,
					imgSrc: "https:" + item.fields.image.fields.file.url,
					viewCount: item.fields.viewCount,
					date: item.fields.datePublished.substr(0, 10),
					category: item.fields.category,
					subCategory: item.fields.subCategory,
					publisher: item.fields.publisher,
					featured: item.fields.featured,
				};
			});
			setAllItems(tempItemsArray);

			tempItemsArray = tempItemsArray.filter(item => {
				return Boolean(item.featured);
			});
			setFeaturedItemsArray(tempItemsArray);
		}
	}, [fetchedItems]);

	// useEffect(() => {
	// 	if (searchValue === "") {
	// 		console.log("also-fired");
	// 		console.dir(allItemsInCategory);
	// 		setItemsForView(allItemsInCategory);
	// 	} else {
	// 		tempItemsArray = allItemsInCategory.filter(item => {
	// 			return (
	// 				item.title.toLowerCase().includes(searchValue) ||
	// 				item.iconType.toLowerCase().includes(searchValue) ||
	// 				item.publisher.toLowerCase().includes(searchValue)
	// 			);
	// 		});
	// 		setItemsForView(tempItemsArray);
	// 	}
	// }, [searchValue]);

	useEffect(() => {
		const chosenCategory = chosenCategoryForFilter.title.toLowerCase();
		// console.table(chosenCategoryForFilter);
		console.log("Chosen category:");
		console.log(chosenCategory);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

		console.log("featuredItemsArray arrived as:");
		console.table(featuredItemsArray);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

		console.log("allItems arrived as:");
		console.table(allItems);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");

		if (chosenCategory === "featured") {
			setAllItemsInCategory(featuredItemsArray);
			setItemsForView(featuredItemsArray);
		} else if (chosenCategory === "show all") {
			setAllItemsInCategory(allItems);
			setItemsForView(allItems);
		} else {
			tempItemsArray = allItems.filter(item => {
				return (
					item.category.toLowerCase() ===
					chosenCategoryForFilter.title.toLowerCase()
				);
			});
			console.log("tempItemsArray:");
			console.table(tempItemsArray);
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
			setAllItemsInCategory(tempItemsArray);
			setItemsForView(tempItemsArray);
		}
	}, [chosenCategoryForFilter, featuredItemsArray]);

	console.log("ItemsToShow:");
	console.table(itemsForView);

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
