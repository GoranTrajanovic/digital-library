import { useState } from "react";
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
import SearchBar from "../components/SearchBar/SearchBar";
import NumberedSteps from "../components/NumberedSteps/NumberedSteps";
import VerticalCardsOnCtaModal from "../components/Cards/VerticalCardsCategoryOptions/VerticalCardsCategoryOptions";
import ModalStepOne from "../components/ModalStepOne/ModalStepOne";
import CtaModal from "../modules/CtaModal/CtaModal";
import { ModalProvider } from "../modules/CtaModal/ModalContext";
import Header from "../modules/Header/Header";
import Hero from "../modules/Hero/Hero";
import HomePageDescription from "../components/HomePageDescription/HomePageDescription";
import ButtonContainedPrimary from "../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import styles from "./Home.module.sass";
import Footer from "../modules/Footer/Footer";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Hero />
			<ImagesWithText />
			<HomePageDescription />
			<HorizontalCardsLayout cardDetailsArray={dummyContent2} />
		</div>
	);
}
