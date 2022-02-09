import ImageCustom from "./../ImageCustom/ImageCustom";
import styles from "./ImagesWithText.module.sass";
import TEXT_ARR from "./home-screen-text";
import IMAGE_URLS from "./home-screen-images-urls.js";

export default function ImagesWithText() {
	return (
		<>
			{IMAGE_URLS.map((url, index) => (
				<div className={styles.wrapper} key={url.slice(url.lastIndexOf("/"))}>
					<h2 className={styles["heading-for-mobile"]}>
						{TEXT_ARR[index].title}
					</h2>
					<div className={styles["image-wrapper"]}>
						<ImageCustom
							src={url}
							alt={"Computer, statistics"}
							// layout="responsive"
							width={350}
							height={280}
							priority={true}
						/>
					</div>
					<div className={styles["text-wrapper"]}>
						<h2>{TEXT_ARR[index].title}</h2>
						<p>{TEXT_ARR[index].paragraphText}</p>
					</div>
				</div>
			))}
		</>
	);
}
