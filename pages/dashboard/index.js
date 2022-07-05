import { usePersonalStore } from "../../stores/usePersonalStore/usePersonalStore";
import Title from "../../components/Title/Title";
import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import styles from "./Dashboard.module.sass";
import { useState } from "react";
import { filter } from "domutils";
import { useEffect } from "react";

export default function Dashboard() {
	const contentItemsWishlisted = usePersonalStore(
		s => s.contentItemsWishlisted
	);
	const blogItemsWishlisted = usePersonalStore(s => s.blogItemsWishlisted);
	const itemsInProgress = usePersonalStore(s => s.itemsInProgress);
	const itemsCompleted = usePersonalStore(s => s.itemsCompleted);

	const [filteredCategory, setFilteredCategory] = useState("all");

	console.log("~~~~~~~~~contentItemsWishlisted in Dashboard.js:");
	console.log(contentItemsWishlisted);

	const allPersonalCategories = getAllPersonalCategoryNames([
		...contentItemsWishlisted,
		...blogItemsWishlisted,
		...itemsInProgress,
		...itemsCompleted,
	]);

	console.log("~~~~~~~~~~~~allPersonalCategories");
	console.log(allPersonalCategories);
	console.log("~~~~~~~~~~~~allPersonalCategories");

	const handleFilterCategory = e => {
		e.preventDefault();
		const filterList = e.currentTarget.children;
		const chosenCategory = e.target;
		// filterList.map(item => {
		// 	item.classList.remove("current");
		// });
		Array.prototype.map.call(filterList, i => {
			i.classList.remove(styles.current);
		});
		e.target.classList.add(styles.current);
		console.log("chosen: " + chosenCategory.innerText);
		setFilteredCategory(s =>
			chosenCategory.innerText.replace(/[^a-zA-Z ]/g, "")
		);
	};

	useEffect(() => {
		console.log(filteredCategory);
	}, [filteredCategory]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h1>Dashboard</h1>
			</div>
			<div className={styles.dashboardFilter}>
				<ul onClick={handleFilterCategory}>
					<li className={styles.current}>All</li>
					{Object.keys(allPersonalCategories).map(item => {
						return (
							<li>
								{item
									.split(" ")
									.map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
									.join(" ")}{" "}
								({allPersonalCategories[item]})
							</li>
						);
					})}
					{/* {allPersonalCategories.map(category => {
						return <li>{category}</li>;
					})} */}
				</ul>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.wishlistedContent}>
					{/* <h2>Content Wishlisted</h2> */}
					<Title>Content Wishlisted</Title>
					<div className={styles.itemsWrapper}>
						{contentItemsWishlisted.map(item => {
							if (
								!item ||
								(item.category !== filteredCategory.toLowerCase().trim() &&
									filteredCategory.toLowerCase().trim() !== "all")
							)
								return;
							// if (!item) return;
							return (
								<VerticalCard
									type={item.type}
									imgSrc={item.imgSrc}
									title={item.title}
									iconType={item.iconType}
									urlLink={item.urlLink}
									viewCount={item.viewCount}
									date={item.date}
									category={item.category}
									subCategory={item.subCategory}
									publisher={item.publisher}
									key={item.title}
									isWishlisted={true}
								/>
							);
						})}
						{/* {contentItemsWishlistedRef.length === 0 ? (
							""
						) : (
							<span>
								Empty for now.
								<ButtonContainedPrimary type={`symbol-right-start`}>
									<Link href="/library">
										<a>Go to library</a>
									</Link>
								</ButtonContainedPrimary>
							</span>
						)} */}
					</div>
				</div>
				<div className={styles.wishlistedBlogs}>
					<Title>Blog(s) Wishlisted</Title>
					<div className={styles.itemsWrapper}>
						{blogItemsWishlisted.map(item => {
							if (
								!item ||
								(item.category !== filteredCategory.toLowerCase().trim() &&
									filteredCategory.toLowerCase().trim() !== "all")
							)
								return;
							return (
								<VerticalCard
									type={item.type}
									imgSrc={item.imgSrc}
									title={item.title}
									iconType={item.iconType}
									urlLink={item.urlLink}
									viewCount={item.viewCount}
									date={item.date}
									category={item.category}
									subCategory={item.subCategory}
									publisher={item.publisher}
									key={item.title}
									isWishlisted={true}
								/>
							);
						})
							? ""
							: "empty"}
						{}
					</div>
				</div>
				<div className={styles.inProgress}>
					<Title>In Progress</Title>
					<div className={styles.itemsWrapper}>
						{itemsInProgress.map(item => {
							if (
								!item ||
								(item.category !== filteredCategory.toLowerCase().trim() &&
									filteredCategory.toLowerCase().trim() !== "all")
							)
								return;
							return (
								<VerticalCard
									type={item.type}
									imgSrc={item.imgSrc}
									title={item.title}
									iconType={item.iconType}
									urlLink={item.urlLink}
									viewCount={item.viewCount}
									date={item.date}
									category={item.category}
									subCategory={item.subCategory}
									publisher={item.publisher}
									key={item.title}
									isWishlisted={true}
								/>
							);
						})}
					</div>
				</div>
				<div className={styles.completed}>
					<Title>Completed</Title>
					<div className={styles.itemsWrapper}>
						{itemsCompleted.map(item => {
							if (
								!item ||
								(item.category !== filteredCategory.toLowerCase().trim() &&
									filteredCategory.toLowerCase().trim() !== "all")
							)
								return;
							return (
								<VerticalCard
									type={item.type}
									imgSrc={item.imgSrc}
									title={item.title}
									iconType={item.iconType}
									urlLink={item.urlLink}
									viewCount={item.viewCount}
									date={item.date}
									category={item.category}
									subCategory={item.subCategory}
									publisher={item.publisher}
									key={item.title}
									isWishlisted={true}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{/* <div className={styles.graphs}>
				<h2>Graphs</h2>
			</div> */}
		</div>
	);
}

function getAllPersonalCategoryNames(array) {
	return array.reduce(
		(acc, o) => ((acc[o.category] = (acc[o.category] || 0) + 1), acc),
		{}
	);
}
