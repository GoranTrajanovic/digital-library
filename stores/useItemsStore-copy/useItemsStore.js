import create from "zustand";
import { devtools } from "zustand/middleware";
import { createClient } from "contentful";

export const useItemsStore = create(
	devtools(set => ({
		fetchedItems: null,
		fetchItemsFromServer: () =>
			set(s => ({
				fetchedItems: items,
			})),
	}))
);

const contentGetter = ({ items }) => {
	const fetchItemsFromServer = useItemsStore(s => s.fetchItemsFromServer);
	fetchItemsFromServer(items);
};

import { useMemo } from "react";
import create from "zustand";
import { devtools } from "zustand/middleware";

let store;

const initialState = {
	fetchedItems: null,
};

function initStore(preloadedState = initialState) {
	return create(set => ({
		...initialState,
		...preloadedState,
		fetchItemsFromServer: items =>
			set(s => ({
				fetchedItems: items,
			})),
	}));
}

export const initializeStore = preloadedState => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Zustand state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === "undefined") return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useHydrate(initialState) {
	const state =
		typeof initialState === "string" ? JSON.parse(initialState) : initialState;
	const store = useMemo(() => initializeStore(state), [state]);
	return store;
}
