import ImageCustom from "../../ImageCustom/ImageCustom";
import styles from "./VCTitle.module.sass";

export default function VCTitle({ children, iconType }) {
	return (
		<>
			<div className={`${styles["title-wrapper"]} ${styles[iconType]}`}>
				<h3>{children}</h3>
			</div>
		</>
	);
}
