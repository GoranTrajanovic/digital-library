import ImageCustom from "../../ImageCustom/ImageCustom";
import VCList from "./VCList";
import VCTitle from "./VCTitle";
import ButtonOutlinedPrimary from "../../Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonContainedPrimary from "../../Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import styles from "./VerticalCard.module.sass";

export default function VerticalCard({ type, imgSrc, title, iconType }) {
	if (type === "read-more") {
		return (
			<>
				<div className={styles["card-wrapper"]}>
					<VCTitle>Design</VCTitle>
					<ImageCustom src={imgSrc} alt={title} width={150} height={150} />
					<span>includes:</span>
					<VCList />
					<div className={styles["buttons-wrapper"]}>
						<ButtonOutlinedPrimary
							type="symbol-left-bookmark"
							style={{ width: "5px" }}
						>
							Wishlist
						</ButtonOutlinedPrimary>
						<ButtonContainedPrimary>Read more</ButtonContainedPrimary>
					</div>
				</div>
			</>
		);
	} else {
		const ACTION = type;
		let STATUS = "blank";
		switch (ACTION) {
			case "start":
				STATUS = "ready!";
				break;
			case "resume":
				STATUS = "in-progress";
				break;
			case "review":
				STATUS = "completed";
				break;
		}
		return (
			<>
				<div className={styles["card-wrapper"]}>
					<VCTitle iconType={iconType}>Design</VCTitle>
					<ImageCustom src={imgSrc} alt={title} width={150} height={150} />
					<div className={styles["action-wrapper"]}>
						<ButtonContainedPrimary type={`symbol-right-${ACTION}`}>
							{ACTION}
						</ButtonContainedPrimary>
						<span className={styles[STATUS.replace("!", "")]}>
							{STATUS.replace("-", " ")}
						</span>
					</div>
				</div>
			</>
		);
	}
}
