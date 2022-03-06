import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation/Navigation";
import ImageCustom from "../components/ImageCustom/ImageCustom";
import styles from "./404.module.sass";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => router.push("/"), 5000);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles["text-wrapper"]}>
				<h1>Ooops!</h1>
				<h1>Something went wrong.</h1>
				<hr />
				<ImageCustom
					src="/404-page/confused-robot.jpg"
					alt="confused-robot"
					width={320}
					height={320}
				/>
				<p>Maybe you were looking for:</p>
				<Navigation type={"footer"} />
			</div>
			<ImageCustom
				src="/404-page/confused-robot.jpg"
				alt="confused-robot"
				width={500}
				height={500}
			/>
		</div>
	);
}
