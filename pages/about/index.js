import cheerio from "cheerio";
import axios from "axios";
import styles from "./About.module.sass";

export default function About({ languagesUsed }) {
	const languagesDetails = [
		{
			languageName: "Javascript",
			imgSrc: "/icons/javascript_icon.jpg",
			color: "#f1e05a",
		},
		{ languageName: "Sass", imgSrc: "/icons/sass_icon.jpg", color: "#a53b70 " },
		{ languageName: "SCSS", imgSrc: "/icons/scss_icon.jpg", color: "#1b73ba " },
		{ languageName: "CSS", imgSrc: "/icons/css_icon.jpg", color: "#c6538c " },
		{ languageName: "Other", imgSrc: "", color: "#ededed " },
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.ribbonOfColorsInPercentage}>
				{languagesUsed.map(languageObj => {
					let { color } = languagesDetails.filter(
						languagesDetailsObj =>
							languagesDetailsObj.languageName.toLowerCase() ==
							languageObj.languageName.toLowerCase()
					)[0];
					console.log(color);
					let tempStyle = {
						width: `${languageObj.languagePercent}%`,
						backgroundColor: color,
					};
					return <span style={tempStyle}></span>;
				})}
			</div>
			<ul>
				{languagesUsed.map(languageObj => {
					const { imgSrc } = languagesDetails.filter(
						languagesDetailsObj =>
							languagesDetailsObj.languageName.toLowerCase() ==
							languageObj.languageName.toLowerCase()
					)[0];

					return (
						<li key={languageObj.languageName}>
							{imgSrc ? (
								<img src={imgSrc} alt={`${languageObj.languageName} icon`} />
							) : (
								""
							)}
							{languageObj.languageName} {languageObj.languagePercent}%
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	const HARDCODED = [
		{ languageName: "JavaScript", languagePercent: "45.7" },
		{ languageName: "Sass", languagePercent: "42.1" },
		{ languageName: "CSS", languagePercent: "5.9" },
		{ languageName: "SCSS", languagePercent: "5.8" },
		{ languageName: "Other", languagePercent: "0.5" },
	];

	const URL = "https://github.com/GoranTrajanovic/digital-libraryy";
	const { data } = await axios.get(URL).catch(error => {
		console.log(
			"~~~There was error on getting through GitHub. Taking hardcoded data..."
		);
		console.log(error);
		return { data: null };
	});

	let languagesUsed = [];

	if (data) {
		let regex1 = /Languages.*?\/ul>/s;
		let regex2 = /text\-bold.*?">(.*?)<\/.*?([0-9\.]+)/gs;
		let matched = "";
		let target = data.match(regex1)[0];

		while ((matched = regex2.exec(target))) {
			languagesUsed.push({
				languageName: matched[1],
				languagePercent: matched[2],
			});
		}
	} else {
		languagesUsed = HARDCODED;
	}

	return { props: { languagesUsed: languagesUsed } };
}
