import useMediaQuery from "../hooks/useMediaQuery";
import HorizontalCard from "../components/Cards/HorizontalCard/HorizontalCard";
import ImagesWithText from "../components/ImagesWithText/ImagesWithText";
import ButtonCTA from "../components/Buttons/ButtonCTA/ButtonCTA";
import ButtonOutlinedConfirmation from "../components/Buttons/ButtonOutlinedConfirmation/ButtonOutlinedConfirmation";
import VerticalCard from "../components/Cards/VerticalCard/VerticalCard";
import dummyContent from "../dummy_content/verticalCardPopulate";
import VerticalCardsLayout from "../modules/VerticalCardsLayout/VerticalCardsLayout";
import dummyContent2 from "../dummy_content/horizontalCardPopulate";
import HorizontalCardsLayout from "../modules/HorizontalCardsLayout/HorizontalCardsLayout";
import Wishlisted from "../components/SystemConfirmations/Wishlisted/Wishlisted";

export default function Home() {
	const cardDetails = {
		viewCount: 120000,
		date: "April 23, 2021",
		category: "Programming",
		subcategory: "Algorithms",
	};
	return (
		<>
			{/* {useMediaQuery(906) ? (
				<VerticalCard
					type="start"
					title="python programming 101"
					imgSrc="/card-images/design.png"
					iconType="article"
					overlayInfo={testObject}
				/>
			) : (
				<HorizontalCard title={"design"} imgSrc={"/card-images/design.png"} />
			)} */}
			{/* <HorizontalCardsLayout cardDetailsArray={dummyContent2} /> */}
			{/* <Wishlisted /> */}
			{/* <VerticalCard
				type="start"
				title="python programming 101"
				imgSrc="/card-images/design.png"
				iconType="article"
				cardDetails={cardDetails}
			/> */}
			<VerticalCardsLayout cardDetailsArray={dummyContent} />
			<HorizontalCardsLayout cardDetailsArray={dummyContent2} />
		</>
	);
}
