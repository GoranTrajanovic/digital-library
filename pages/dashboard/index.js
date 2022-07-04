import { usePersonalStore } from "../../stores/usePersonalStore/usePersonalStore";
import Title from "../../components/Title/Title";
import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import styles from "./Dashboard.module.sass";

export default function Dashboard() {
	const contentItemsWishlisted = usePersonalStore(
		s => s.contentItemsWishlisted
	);
	const blogItemsWishlisted = usePersonalStore(s => s.blogItemsWishlisted);
	const itemsInProgress = usePersonalStore(s => s.itemsInProgress);
	const itemsCompleted = usePersonalStore(s => s.itemsCompleted);

	console.log("~~~~~~~~~contentItemsWishlisted in Dashboard.js:");
	console.log(contentItemsWishlisted);

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h1>Dashboard</h1>
			</div>
			{/* <div className={styles.dashboardFilter}>filter</div> */}
			<div className={styles.contentWrapper}>
				<div className={styles.wishlistedContent}>
					{/* <h2>Content Wishlisted</h2> */}
					<Title>Content Wishlisted</Title>
					<div className={styles.itemsWrapper}>
						{contentItemsWishlisted.map(item => {
							console.log("~~~~~~~~~item in Dashboard.js:");
							console.log(item);

							if (!item) return;
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
				<div className={styles.wishlistedBlogs}>
					<Title>Blog(s) Wishlisted</Title>
					<div className={styles.itemsWrapper}>
						{blogItemsWishlisted.map(item => {
							if (!item) return;
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
				<div className={styles.inProgress}>
					<Title>In Progress</Title>
					<div className={styles.itemsWrapper}>
						{itemsInProgress.map(item => {
							if (!item) return;
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
							if (!item) return;
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
