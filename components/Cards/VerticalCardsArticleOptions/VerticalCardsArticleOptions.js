import VerticalCard from "../VerticalCard/VerticalCard";
import VerticalCardSmall from "../VerticalCard/VerticalCardSmall";
import styles from "./VerticalCardsArticleOptions.module.sass";
import { cardDetailsObj } from "./cardItems";
import { useModalStore } from "../../../modules/CtaModal/ModalState";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function VerticalCardsArticleOptions() {
	const updateArticlesWishlisted = useModalStore(
		s => s.updateArticlesWishlisted
	);
	const articlesWishlisted = useModalStore(s => s.articlesWishlisted);
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
						onPress={updateArticlesWishlisted}
						selected={articlesWishlisted.includes(item.id) ? true : false}
					/>
				);
			})}
		</div>
	);
}
