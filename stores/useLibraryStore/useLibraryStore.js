import create from "zustand";
import { devtools } from "zustand/middleware";
import categories from "./categories";
import cardDetailsArray from "./verticalCardPopulate";

// preparing nice library store

// const categoriesFormatted = categories.map(category => ({
// 	...category,
// 	title: capitalizeWords(category.title),
// }));

// console.dir(categoriesFormatted);

export const useLibraryStore = create(
	devtools(
		set => ({
			chosenCategoryForFilter: {
				title: "featured",
				description: "",
				descriptionSource: "",
			},
			wishlistedItems: [],
			inputTextFilter: "",
			allItems: [],
			allCategories: categories,
			itemsForView: [
				{
					type: "start",
					title: "Learn MERN Stack in 2022",
					imgSrc: "/card-images/design.png",
					iconType: "course-free",
					cardDetails: {
						viewCount: 120000,
						date: "April 23, 2021",
						category: "Programming",
						publisher: "Travery Media",
					},
				},
			],
			setChosenCategoryForFilter: category =>
				set(() => ({
					chosenCategoryForFilter: category,
				})),
			setAllItems: itemsArr =>
				set(s => ({
					allItems: itemsArr,
				})),
			setItemsForView: itemsArr =>
				set(s => ({
					itemsForView: itemsArr,
				})),
		}),
		{ name: "LibraryStore" }
	)
);
