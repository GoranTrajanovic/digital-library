import create from "zustand";
import { devtools } from "zustand/middleware";

export const useModalStore = create(
	devtools(set => ({
		boolModalShow: false,
		currentStep: 1,
		categoriesSelected: [],
		articlesWishlisted: [],
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
		updateArticlesWishlisted: selectedArticle =>
			set(state => ({
				articlesWishlisted: state.articlesWishlisted.includes(selectedArticle)
					? [...state.articlesWishlisted.filter(c => c !== selectedArticle)]
					: [...state.articlesWishlisted, selectedArticle],
			})),
	}))
);

// export function ModalProvider({ children }) {
// 	return (
// 		<ModalContext.Provider value={modalState}>
// 			<ModalUpdateContext.Provider value={updateModalInfo}>
// 				{children}
// 			</ModalUpdateContext.Provider>
// 		</ModalContext.Provider>
// 	);
// }
