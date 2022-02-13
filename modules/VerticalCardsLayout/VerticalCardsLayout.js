import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import styles from "./VerticalCardsLayout.module.sass";

export default function VerticalCardsLayout({ cardDetailsArray }) {
	return (
		<div className={styles.layout}>
			{cardDetailsArray.map(item => {
				return (
					<VerticalCard
						type={item.type}
						title={item.title}
						imgSrc={item.imgSrc}
						iconType={item.iconType}
						cardDetails={item.cardDetails}
					/>
				);
			})}
		</div>
	);
}
