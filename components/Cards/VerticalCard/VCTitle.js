import ImageCustom from "../../ImageCustom/ImageCustom";
import styles from "./VCTitle.module.sass";

export default function VCTitle({ children, iconType, cardIsHovered }) {
	console.log("reundered with icontype of " + iconType);
	return (
		<>
			<div
				className={`${styles["title-wrapper"]} ${styles[iconType]} ${
					cardIsHovered ? styles.hovered : ""
				}`}
			>
				<h3>{children}</h3>
			</div>
		</>
	);
}
