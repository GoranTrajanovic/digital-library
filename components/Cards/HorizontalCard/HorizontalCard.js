import HCTitle from "./HCTitle";
import HCList from "./HCList";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import styles from "./HorizontalCard.module.sass";
import ImageCustom from "../../ImageCustom/ImageCustom";

export default function HorizontalCard({ title, imgSrc }) {
	return (
		<>
			<div className={styles["card-wrapper"]}>
				<ImageCustom src={imgSrc} alt={title} width={250} height={200} />
				<div className={styles["card-details-wrapper"]}>
					<div className={styles["text-wrapper"]}>
						<HCTitle>{title}</HCTitle>
						<HCList></HCList>
					</div>
					<div className={styles["buttons-wrapper"]}>
						<ButtonOutlinedPrimary type="symbol-left-bookmark">
							Wishlist
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
					</div>
				</div>
			</div>
		</>
	);
}
