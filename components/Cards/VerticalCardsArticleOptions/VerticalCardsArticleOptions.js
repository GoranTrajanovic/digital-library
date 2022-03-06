import VerticalCard from "../VerticalCard/VerticalCard";
import VerticalCardSmall from "../VerticalCard/VerticalCardSmall";
import styles from "./VerticalCardsArticleOptions.module.sass";
import { cardDetailsObj } from "./cardItems";
import { useModalStore } from "../../../stores/useModalStore/useModalStore";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function VerticalCardsArticleOptions() {
	const updateItemsWishlisted = useModalStore(s => s.updateItemsWishlisted);
	const itemsWishlisted = useModalStore(s => s.itemsWishlisted);
	const cardDetailsForRender = useMediaQuery(510)
		? cardDetailsObj.slice(0, 3)
		: cardDetailsObj;

	return (
		<div className={styles.wrapper}>
			{cardDetailsForRender.map(item => {
				return (
					<VerticalCardSmall
						id={item.id}
						cardDetails={item.cardDetails}
						imgSrc={item.imgSrc}
						title={item.title}
						iconType={item.iconType}
						key={item.id}
						onPress={updateItemsWishlisted}
						selected={itemsWishlisted.includes(item.id) ? true : false}
					/>
				);
			})}
		</div>
	);
}
