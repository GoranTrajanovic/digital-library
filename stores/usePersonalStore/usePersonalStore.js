import create from "zustand";
import { devtools } from "zustand/middleware";

export const usePersonalStore = create(
	devtools(set => ({
		contentItemsWishlisted: [],
		blogItemsWishlisted: [],
		itemsInProgress: [],
		itemsCompleted: [],
		addContentItemWishlisted: item =>
			set(state => ({
				contentItemsWishlisted: [...state.contentItemsWishlisted, item],
			})),
		addBlogItemWishlisted: item =>
			set(state => ({
				blogItemsWishlisted: [...state.blogItemsWishlisted, item],
			})),
		addItemInProgress: item =>
			set(state => ({
				itemsInProgress: [...state.itemsInProgress, item],
			})),
		addItemCompleted: item =>
			set(state => ({
				itemsCompleted: [...state.itemsCompleted, item],
			})),
		removeContentItemWishlisted: title =>
			set(state => ({
				contentItemsWishlisted: state.contentItemsWishlisted.filter(item => {
					return item.title !== title;
				}),
			})),
		removeBlogItemWishlisted: title =>
			set(state => ({
				blogItemsWishlisted: state.blogItemsWishlisted.filter(item => {
					return item.title !== title;
				}),
			})),
		removeItemInProgress: title =>
			set(state => ({
				itemsInProgress: state.itemsInProgress.filter(item => {
					return item.title !== title;
				}),
			})),
		removeItemCompleted: title =>
			set(state => ({
				itemsCompleted: state.itemsCompleted.filter(item => {
					return item.title !== title;
				}),
			})),
	}))
);
