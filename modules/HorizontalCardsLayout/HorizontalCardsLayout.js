import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import HorizontalCard from "../../components/Cards/HorizontalCard/HorizontalCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import Title from "../../components/Title/Title";
import styles from "./HorizontalCardsLayout.module.sass";

export default function HorizontalCardsLayout({ cardDetailsArray }) {
	return (
		<div className={styles.layout}>
			<Title>Featured content</Title>
			{cardDetailsArray.map(cardDetail => {
				return (
					<>
						{useMediaQuery(906) ? (
							<VerticalCard
								type="read-more"
								title={cardDetail.title}
								imgSrc={cardDetail.imgSrc}
								cardDetails={cardDetail.detailsList}
								key={Math.random()}
							/>
						) : (
							<HorizontalCard
								title={cardDetail.title}
								imgSrc={cardDetail.imgSrc}
								detailsList={cardDetail.detailsList}
								key={Math.random()}
							/>
						)}
					</>
				);
			})}
		</div>
	);
}
