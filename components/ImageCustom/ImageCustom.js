import Image from "next/image";
import styles from "./ImageCustom.module.sass";

export default function ImageCustom({
	src,
	alt,
	width,
	height,
	palceholder,
	priority,
	layout,
}) {
	return (
		<div className={styles["image-wrapper"]}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				palceholder={palceholder}
				priority={priority}
				layout={layout}
			/>
		</div>
	);
}
