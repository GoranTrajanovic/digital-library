import { useEffect } from "react";
import { useModalStore } from "../../stores/useModalStore/useModalStore";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";
import { useSession, signIn } from "next-auth/react";
import VerticalCardsCategoryOptions from "../../components/Cards/VerticalCardsCategoryOptions/VerticalCardsCategoryOptions";
import VerticalCardArticleOptions from "../../components/Cards/VerticalCardsArticleOptions/VerticalCardsArticleOptions";
import NumberedSteps from "../../components/NumberedSteps/NumberedSteps";
import ButtonContainedPrimary from "../../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import SignInForm from "../../components/SignInForm/SignInForm";
import styles from "./CtaModal.module.sass";

export default function CtaModal() {
	const boolModalShow = useModalStore(s => s.boolModalShow);
	const currentStep = useModalStore(s => s.currentStep);
	const customUsername = useModalStore(s => s.customUsername);
	const decreaseStep = useModalStore(s => s.decreaseStep);
	const increaseStep = useModalStore(s => s.increaseStep);
	const toggleShow = useModalStore(s => s.toggleShow);
	const updateCategoriesSelected = useModalStore(
		s => s.updateCategoriesSelected
	);
	const shouldRenderModal = useDelayUnmount(boolModalShow, 400);
	const { data: session } = useSession();

	let modalTitle = "";
	let itemsForRender;

	const handleButtonNext = () => {
		increaseStep();
	};

	const handleButtonPrev = () => {
		decreaseStep();
	};

	const handleModalClose = () => {
		toggleShow();
	};

	let wrapperCSSclasses = `${
		styles[boolModalShow ? "wrapper" : "wrapper-slide-out"]
	}`;

	if (currentStep <= 1) {
		modalTitle = "Select your interest:";
		itemsForRender = <VerticalCardsCategoryOptions />;
	} else if (currentStep === 2) {
		modalTitle = "You might like:";
		itemsForRender = <VerticalCardArticleOptions />;
	} else if (currentStep >= 3) {
		modalTitle = "Sign In:";
		if (session) {
			itemsForRender = <div>Hello there {session.user.name}!</div>;
		} else {
			itemsForRender = (
				<div className={styles["sign-in"]}>
					<SignInForm signIn={signIn} />
				</div>
			);
		}
	}

	useEffect(() => {
		const bodyElement = document.body;
		const htmlElement = document.documentElement;
		const scrollbarElement = document.createElement("div");
		const oldScrollbarElement = document.getElementById("scrollbar");
		bodyElement.style.overflowY = boolModalShow ? "hidden" : "auto";
		oldScrollbarElement &&
			oldScrollbarElement.parentElement.removeChild(oldScrollbarElement);
		scrollbarElement.id = "scrollbar";
		scrollbarElement.style.top = 0;
		scrollbarElement.style.right = 0;
		scrollbarElement.style.bottom = 0;
		scrollbarElement.style.position = "fixed";
		scrollbarElement.style.overflowY = "scroll";
	}, [boolModalShow]);

	return (
		shouldRenderModal && (
			<>
				<div className={wrapperCSSclasses} id="modal">
					<NumberedSteps />
					<span className={styles.title}>{modalTitle}</span>
					{itemsForRender}
					<div className={`${styles["buttons-wrapper"]}`}>
						<ButtonContainedPrimary
							type={currentStep === 1 ? "hide" : ""}
							onPress={handleButtonPrev}
						>
							Previous
						</ButtonContainedPrimary>
						<ButtonContainedPrimary
							type={currentStep === 3 ? "hide" : ""}
							onPress={handleButtonNext}
						>
							Next
						</ButtonContainedPrimary>
					</div>
					<button
						className={styles["close-button"]}
						onClick={handleModalClose}
					></button>
				</div>

				<div
					className={`${styles.overlay} ${
						styles[boolModalShow ? "overlay-active" : "overlay"]
					}`}
					onClick={toggleShow}
				></div>
			</>
		)
	);
}
