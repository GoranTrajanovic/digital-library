import create from "zustand";
import { devtools } from "zustand/middleware";

export const useModalStore = create(
	devtools(set => ({
		boolModalShow: false,
		currentStep: 1,
		categoriesSelected: [],
		itemsWishlisted: [],
		customUsername: "",
		decreaseStep: () => set(state => ({ currentStep: state.currentStep - 1 })),
		increaseStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
		toggleShow: () => set(state => ({ boolModalShow: !state.boolModalShow })),
		updateCategoriesSelected: selectedCategory =>
			set(state => ({
				categoriesSelected: state.categoriesSelected.includes(selectedCategory)
					? [...state.categoriesSelected.filter(c => c !== selectedCategory)]
					: [...state.categoriesSelected, selectedCategory],
			})),
		updateItemsWishlisted: selectedArticle =>
			set(state => ({
				itemsWishlisted: state.itemsWishlisted.includes(selectedArticle)
					? [...state.itemsWishlisted.filter(c => c !== selectedArticle)]
					: [...state.itemsWishlisted, selectedArticle],
			})),
	}))
);

// export function ModalProvider({ children }) {
// 	return (
// 		<ModalContext.Provider value={useModalStore}>
// 			<ModalUpdateContext.Provider value={updateModalInfo}>
// 				{children}
// 			</ModalUpdateContext.Provider>
// 		</ModalContext.Provider>
// 	);
// }
