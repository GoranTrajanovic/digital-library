import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useModalStore } from "../../../modules/CtaModal/ModalState";
import cardItems from "./cardItems";
import styles from "./VerticalCardsCategoryOptions.module.sass";

export default function VerticalCardsCategoryOptions() {
	const updateCategoriesSelected = useModalStore(
		s => s.updateCategoriesSelected
	);
	const categoriesSelected = useModalStore(s => s.categoriesSelected);
	let cardItemsForRender = [];

	if (useMediaQuery(905)) {
		cardItemsForRender = cardItems.slice(0, 6);
	} else {
		cardItemsForRender = cardItems;
	}

	return (
		<div className={styles.wrapper}>
			{cardItemsForRender.map(item => {
				return (
					<div
						className={`${styles["card-wrapper"]} ${
							styles[categoriesSelected.includes(item.title) ? "selected" : ""]
						}`}
						onClick={() => {
							updateCategoriesSelected(item.title);
						}}
						key={item.title}
					>
						<img className={styles.icon} src={item.url} />
						<span className={styles.title}>{item.title}</span>
					</div>
				);
			})}
		</div>
	);
}
