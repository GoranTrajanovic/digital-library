import { useState } from "react";
import { useModalUpdate } from "../../../modules/CtaModal/ModalContext";
import cardItems from "./cardItems";
import styles from "./VerticalCardsCategoryOptions.module.sass";

export default function VerticalCardsCategoryOptions() {
	const emptyArr = [-1];
	const [selectedIndexeses, setSelectedIndexes] = useState(emptyArr);
	const updateModal = useModalUpdate();

	return (
		<div className={styles.wrapper}>
			{cardItems.map((item, index) => {
				return (
					<div
						className={`${styles["card-wrapper"]} ${
							styles[selectedIndexeses.includes(index) ? "selected" : ""]
						}`}
						onClick={() => {
							updateModal(0, item.title);
							setSelectedIndexes(prevState => {
								return prevState.includes(index)
									? [...prevState.filter(i => i !== index)]
									: [...prevState, index];
							});
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
