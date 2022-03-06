import create from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
	devtools(set => ({
		itemsWishlisted: [],
		itemsStarted: [],
		itemsCompleted: [],
		updateItemsWishlisted: item =>
			set(state => ({ itemsWishlisted: [...state.itemsWishlisted, item] })),
		updateItemsStarted: item =>
			set(state => ({ itemsStarted: [...state.itemsStarted, item] })),
		updateItemsCompleted: item =>
			set(state => ({ itemsCompleted: [...state.itemsCompleted, item] })),
	}))
);
