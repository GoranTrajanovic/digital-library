import { useLibraryStore } from "../../stores/useLibraryStore/useLibraryStore";
import ButtonContainerSecondary from "../Buttons/ButtonContainedSecondary/ButtonContainedSecondary";
import styles from "./CategorySelectionButtons.module.sass";

export default function CategorySelectionButtons() {
	const chosenCategoryForFilter = useLibraryStore(
		s => s.chosenCategoryForFilter
	);
	const categories = useLibraryStore(s => s.allCategories);
	const setChosenCategoryForFilter = useLibraryStore(
		s => s.setChosenCategoryForFilter
	);

	const categorySelectionHandler = category => {
		setChosenCategoryForFilter(category);
	};
	return (
		<div className={styles.wrapper}>
			{categories.map(category => {
				return (
					<ButtonContainerSecondary
						selected={
							category.title.toLowerCase() ===
							chosenCategoryForFilter.title.toLowerCase()
						}
						key={category.title}
						click={categorySelectionHandler.bind(this, category)}
					>
						{category.title}
					</ButtonContainerSecondary>
				);
			})}
		</div>
	);
}
