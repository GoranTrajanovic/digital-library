import { createClient } from "contentful";
import ImageCustom from "../../components/ImageCustom/ImageCustom";
import styles from "./Blog.module.sass";

export default function Blog({ blogData }) {
	const blogObj = {
		title: blogData[0].fields.title,
		datePublished: blogData[0].fields.datePublished,
		coverImageURL: blogData[0].fields.coverImage.fields.file.url,
		content: blogData[0].fields.blogContent.content,
	};
	const { title, datePublished, coverImageURL, content } = blogObj;

	return (
		<div className={styles.wrapper}>
			<div className={styles.coverWrapper}>
				<ImageCustom
					src={"https:" + coverImageURL}
					width="500"
					height="400"
					alt={title}
				/>
				<h1>{title}</h1>
			</div>
			<div className={styles.dateWrapper}>
				<span className={styles.calendarIcon}></span>
				<span>{datePublished.substr(0, 10)}</span>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const blogData = await client.getEntries({ content_type: "blog" });
	const paths = blogData.items.map(blogItem => {
		return { params: { slug: blogItem.fields.slug } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const { items } = await client.getEntries({ content_type: "blog" });

	let blogData = items.filter(item => {
		return item.fields.slug === params.slug;
	});

	return {
		props: {
			blogData,
		},
	};
}
