import { createClient } from "contentful";
import ImageCustom from "../../components/ImageCustom/ImageCustom";
import styles from "./BlogIndividual.module.sass";
import Title from "react-titles/Title4";
import AnimatedText from "react-animated-text-content";
import keyIndex from "react-key-index";

export default function BlogIndividual({ blogData }) {
	const blogObj = {
		title: blogData[0].fields.title,
		datePublished: blogData[0].fields.datePublished,
		coverImageURL: blogData[0].fields.coverImage.fields.file.url,
		content: blogData[0].fields.blogContent.content,
	};
	const { title, datePublished, coverImageURL, content } = blogObj;

	console.log(blogData);

	return (
		<div className={styles.wrapper}>
			<div className={styles.coverWrapper}>
				<ImageCustom
					src={"https:" + coverImageURL}
					width="500"
					height="400"
					alt={title}
				/>
				{/* <Title size="400" text1="" text2="DESIGN" open={true} />
				 */}
				<h1>
					<AnimatedText
						type="words" // animate words or chars
						animation={{
							x: "200px",
							y: "-20px",
							scale: 1.1,
							ease: "ease-in-out",
						}}
						animationType="float"
						interval={0.1}
						duration={1.2}
						tag="p"
						className="animated-paragraph"
						includeWhiteSpaces
						threshold={0.1}
						rootMargin="20%"
					>
						{title}
					</AnimatedText>
				</h1>
			</div>
			<div className={styles.dateWrapper}>
				<span className={styles.calendarIcon}></span>
				<span>{datePublished.substr(0, 10)}</span>
			</div>
			<div className={styles.contentWrapper}>
				{content.map(item => {
					let value = "";
					let type = item.nodeType;
					let key = item.key;
					let imgUrl = "";
					let imgTitle = "";
					let imgDescription = "";

					if (Object.keys(item.data).length !== 0) {
						imgUrl = item.data.target.fields.file.url;
						imgTitle = item.data.target.fields.title;
						imgDescription = item.data.target.fields.description;
					}
					if (item.content[0]) {
						value = item.content[0].value;
					}

					if (type === "paragraph") {
						// console.log(item.content);
						// item.content.map(item => temp.push(item.value));
						// console.log(temp);
						// return (
						// 	<div>
						// 		{" "}
						// 		{temp.map(item => {
						// 			return <p key={key + Math.random()}>{item}</p>;
						// 		})}
						// 	</div>
						// );
						console.log(value);
						return <p key={key + Math.random()}>{value}</p>;
					} else if (type === "heading-1") {
						return <h2 key={key}>{value}</h2>;
					} else if (type === "heading-2") {
						return <h3 key={key}>{value}</h3>;
					} else if (type === "embedded-asset-block") {
						return (
							<div className={styles.imageWrapper}>
								<ImageCustom
									src={"https:" + imgUrl}
									alt={imgTitle}
									width="400"
									height="250"
									key={key}
								/>
								<p
									key={Math.random().toString(16)}
									className={styles.imageDescription}
								>
									{imgDescription}
								</p>
							</div>
						);
					}
				})}
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

	const { items } = await client.getEntries({
		content_type: "blog",
		include: 10,
	});

	let blogData = items.filter(item => {
		return item.fields.slug === params.slug;
	});

	let tempArray = blogData[0].fields.blogContent.content.map(item => {
		return {
			...item,
			key: Math.random().toString(16),
		};
	});
	blogData[0].fields.blogContent.content = [...tempArray];

	return {
		props: {
			blogData,
		},
	};
}
