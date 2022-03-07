import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import styles from "./VerticalCardsLayout.module.sass";

export default function VerticalCardsLayout({ itemsForView }) {
	return (
		<div className={styles.layout}>
			{itemsForView.map(item => {
				return (
					<VerticalCard
						type={item.type}
						imgSrc={item.imgSrc}
						title={item.title}
						iconType={item.iconType}
						urlLink={item.urlLink}
						viewCount={item.viewCount}
						date={item.date}
						category={item.category}
						subCategory={item.subCategory}
						publisher={item.publisher}
						key={item.title}
					/>
				);
			})}
		</div>
	);
}
