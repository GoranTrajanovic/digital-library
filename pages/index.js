import useMediaQuery from "../hooks/useMediaQuery";
import HorizontalCard from "../components/Cards/HorizontalCard/HorizontalCard";
import ImagesWithText from "../components/ImagesWithText/ImagesWithText";
import ButtonCTA from "../components/Buttons/ButtonCTA/ButtonCTA";
import ButtonOutlinedConfirmation from "../components/Buttons/ButtonOutlinedConfirmation/ButtonOutlinedConfirmation";
import VerticalCard from "../components/Cards/VerticalCard/VerticalCard";

export default function Home() {
	const object = { viewCount: 120000, date: "April 23, 2021" };
	return (
		<>
			{useMediaQuery(906) ? (
				<VerticalCard
					type="start"
					title="design"
					imgSrc="/card-images/design.png"
					iconType="youtube"
					overlayInfo={object}
				/>
			) : (
				<HorizontalCard title={"design"} imgSrc={"/card-images/design.png"} />
			)}
			<ImagesWithText></ImagesWithText>
			<ButtonCTA></ButtonCTA>
			<ButtonOutlinedConfirmation type="symbol-left-done">
				Saved
			</ButtonOutlinedConfirmation>
		</>
	);
}
