import Image from "next/image";
import styles from "./ImageCustom.module.sass";

export default function ImageCustom({
	src,
	alt,
	width,
	height,
	placeholder,
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
				placeholder={placeholder}
				priority={priority}
				layout={layout}
			/>
		</div>
	);
}
