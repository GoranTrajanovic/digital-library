import styles from "./VerticalCardOverlay.module.sass";

export default function VerticalCardOverlay({ cardIsHovered, cardDetails }) {
	return (
		<>
			<div
				className={`${styles.overlay} ${cardIsHovered ? styles.hovered : ""}`}
			>
				<ul>
					<li>{new Intl.NumberFormat().format(cardDetails.viewCount)}</li>
					<li>{cardDetails.date}</li>
					<li>
						Subcategory:
						<span> {cardDetails.subCategory}</span>
					</li>
					<li>
						Publisher:
						<span> {cardDetails.publisher}</span>
					</li>
				</ul>
			</div>
		</>
	);
}
