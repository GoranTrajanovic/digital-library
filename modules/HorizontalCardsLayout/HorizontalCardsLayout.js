import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import HorizontalCard from "../../components/Cards/HorizontalCard/HorizontalCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./HorizontalCardsLayout.module.sass";

export default function HorizontalCardsLayout({ cardDetailsArray }) {
	return (
		<div className={styles.layout}>
			{cardDetailsArray.map(cardDetail => {
				return (
					<>
						{useMediaQuery(906) ? (
							<VerticalCard
								type="read-more"
								title={cardDetail.title}
								imgSrc={cardDetail.imgSrc}
								cardDetails={cardDetail.detailsList}
								key={cardDetail.title}
							/>
						) : (
							<HorizontalCard
								title={cardDetail.title}
								imgSrc={cardDetail.imgSrc}
								detailsList={cardDetail.detailsList}
								key={cardDetail.title}
							/>
						)}
					</>
				);
			})}
		</div>
	);
}
