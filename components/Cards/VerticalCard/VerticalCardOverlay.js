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
						Category:
						<span> {cardDetails.category}</span>
					</li>
					<li>
						Subategory:
						<span> {cardDetails.subcategory}</span>
					</li>
				</ul>
			</div>
		</>
	);
}
