import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import styles from "./VerticalCardsLayout.module.sass";

export default function VerticalCardsLayout({ itemsForView }) {
	console.dir(itemsForView);
	console.log("Logging from VerticalCardsLayout, object is ");
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
						date={item.viewCount}
						category={item.category}
						publisher={item.publisher}
						key={item.title}
					/>
				);
			})}
		</div>
	);
}
