import create from "zustand";
import { devtools } from "zustand/middleware";
import { createClient } from "contentful";

export const useItemsStore = create(
	devtools(set => ({
		fetchedItems: [{}],
		fetchItemsFromServer: items =>
			set(s => ({
				fetchedItems: items,
			})),
	}))
);

const contentGetter = ({ items }) => {
	// const fetchItemsFromServer = useItemsStore(s => s.fetchItemsFromServer);
	// fetchItemsFromServer(items);
};
