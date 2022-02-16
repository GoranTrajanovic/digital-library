import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
const ModalUpdateContext = React.createContext();

export function useModal() {
	return useContext(ModalContext);
}

export function useModalUpdate() {
	return useContext(ModalUpdateContext);
}

export function ModalProvider({ children }) {
	const [modalState, setModalState] = useState({
		currentStep: 1,
		categoriesSelected: [],
		articlesWishlisted: [],
		customUsername: "",
	});

	function updateModalInfo(
		currentStep,
		categorySelected,
		articleWishlisted,
		customUsername
	) {
		currentStep &&
			setModalState(prevState => {
				return { ...prevState, currentStep };
			});
		categorySelected &&
			setModalState(prevState => {
				const newArray = prevState.categoriesSelected.includes(categorySelected)
					? prevState.categoriesSelected.filter(i => i !== categorySelected)
					: [...prevState.categoriesSelected, categorySelected];
				return {
					...prevState,
					categoriesSelected: newArray,
				};
			});
		articleWishlisted &&
			setModalState(prevState => {
				return { ...prevState, articlesWishlisted };
			});
		customUsername &&
			setModalState(prevState => {
				return { ...prevState, customUsername };
			});
	}
	// console.log("Context change detected.");
	// console.dir(modalState);

	return (
		<ModalContext.Provider value={modalState}>
			<ModalUpdateContext.Provider value={updateModalInfo}>
				{children}
			</ModalUpdateContext.Provider>
		</ModalContext.Provider>
	);
}
