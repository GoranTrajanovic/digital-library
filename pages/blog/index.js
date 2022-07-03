// import BlogCard from "../../components/BlogCard/BlogCard";
// import classes from "../../helper_functions/classes";
// import { getAllSlugs } from "../../lib/blogs";
// import { useLoader } from "../../stores/useLoader/useLoader";
import { createClient } from "contentful";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";
import { useBlogStore } from "../../stores/useBlogStore/useBlogStore";
import styles from "./Blogs.module.sass";

export default function Blog({ blogData }) {
	const blogs = [];
	const setFetchedBlogsFromServer = useBlogStore(
		s => s.setFetchedBlogsFromServer
	);
	setFetchedBlogsFromServer(blogData);
	blogData.items.map(blogItem => {
		blogs.push({
			title: blogItem.fields.title,
			datePublished: blogItem.fields.datePublished,
			coverImageURL: blogItem.fields.coverImage.fields.file.url,
			content: blogItem.fields.blogContent.content,
		});
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h1>Blog</h1>
			</div>

			{blogs.map(blog => {
				return <BlogCard blogData={blog} key={blog.title} />;
			})}
		</div>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const blogData = await client.getEntries({ content_type: "blog" });

	return {
		props: {
			blogData,
		},
	};
}
