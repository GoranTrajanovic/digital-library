import { createClient } from "contentful";
import ImagesWithText from "../components/ImagesWithText/ImagesWithText";
import HomePageDescription from "../components/HomePageDescription/HomePageDescription";
import Hero from "../modules/Hero/Hero";
import HorizontalCardsLayout from "../modules/HorizontalCardsLayout/HorizontalCardsLayout";
import VerticalCardsLayout from "../modules/VerticalCardsLayout/VerticalCardsLayout";
import CtaModal from "../modules/CtaModal/CtaModal";
import Title from "../components/Title/Title";
import styles from "./Home.module.sass";
import BlogCard from "../components/Cards/BlogCard/BlogCard";

export default function Home({ contentItems, blogs }) {
	// console.log("~~~~~~~~~~~~ITEMS~~~~~~~~~~~~");
	// console.table(contentItems);
	// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	// console.log("~~~~~~~~~~~~BLOGS~~~~~~~~~~~~");
	// console.table(blogs);
	// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	const blogsArray = blogs
		.filter(blog => {
			return blog.fields.featured;
		})
		.map(blog => {
			return {
				title: blog.fields.title,
				datePublished: blog.fields.datePublished,
				slug: blog.fields.slug,
				coverImageURL: blog.fields.coverImage.fields.file.url,
				featured: blog.fields.featured,
				content: blog.fields.blogContent.content,
			};
		});
	const itemsArray = contentItems
		.filter(item => {
			return item.fields.featured;
		})
		.map(item => {
			return {
				type: "start",
				title: item.fields.title,
				iconType: item.fields.iconType,
				urlLink: item.fields.urlLink,
				imgSrc: "https:" + item.fields.image.fields.file.url,
				viewCount: item.fields.viewCount,
				date: item.fields.datePublished.substr(0, 10),
				category: item.fields.category,
				subCategory: item.fields.subCategory,
				publisher: item.fields.publisher,
				featured: item.fields.featured,
			};
		});

	console.log("~~~~~~~~~~~~ITEMS~~~~~~~~~~~~");
	console.table(itemsArray);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~~~~~~~~~~BLOGS~~~~~~~~~~~~");
	console.table(blogsArray);
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	return (
		<>
			<Hero />
			<ImagesWithText />
			<HomePageDescription />
			<div className={styles.wrapper}>
				<Title>Featured Blogs</Title>
				{/* <HorizontalCardsLayout cardDetailsArray={blogsArray} /> */}
				{blogsArray.map(blog => {
					return <BlogCard blogData={blog} key={blog.title} slug={blog.slug} />;
				})}
			</div>

			<div className={styles.wrapper}>
				<Title>Featured Content</Title>
				<VerticalCardsLayout itemsForView={itemsArray} />
			</div>

			<CtaModal />
		</>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const res_items = await client.getEntries({ content_type: "contentItem" });
	const res_blogs = await client.getEntries({ content_type: "blog" });
	// const res_blogs = {};
	// res_blogs.blogs = [];

	return {
		props: {
			contentItems: res_items.items,
			blogs: res_blogs.items,
		},
	};
}
