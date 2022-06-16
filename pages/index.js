import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import HorizontalCard from "../components/Cards/HorizontalCard/HorizontalCard";
import ImagesWithText from "../components/ImagesWithText/ImagesWithText";
import ButtonCTA from "../components/Buttons/ButtonCTA/ButtonCTA";
import ButtonOutlinedConfirmation from "../components/Buttons/ButtonOutlinedConfirmation/ButtonOutlinedConfirmation";
import VerticalCard from "../components/Cards/VerticalCard/VerticalCard";
import VerticalCardsLayout from "../modules/VerticalCardsLayout/VerticalCardsLayout";
import dummyContent2 from "../dummy_content/horizontalCardPopulate";
import HorizontalCardsLayout from "../modules/HorizontalCardsLayout/HorizontalCardsLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import NumberedSteps from "../components/NumberedSteps/NumberedSteps";
import VerticalCardsOnCtaModal from "../components/Cards/VerticalCardsCategoryOptions/VerticalCardsCategoryOptions";
import CtaModal from "../modules/CtaModal/CtaModal";
import Header from "../modules/Header/Header";
import Hero from "../modules/Hero/Hero";
import HomePageDescription from "../components/HomePageDescription/HomePageDescription";
import ButtonContainedPrimary from "../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import Footer from "../modules/Footer/Footer";
import { useItemStores } from "../stores/useItemsStore/useItemsStore";

export default function Home() {
	return (
		<>
			<Hero />
			<ImagesWithText />
			<HomePageDescription />
			<HorizontalCardsLayout cardDetailsArray={dummyContent2} />
			<CtaModal />
		</>
	);
}
