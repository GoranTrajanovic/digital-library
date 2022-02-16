import { useModalStore } from "./ModalState";
import VerticalCardsCategoryOptions from "../../components/Cards/VerticalCardsCategoryOptions/VerticalCardsCategoryOptions";
import VerticalCardArticleOptions from "../../components/Cards/VerticalCardsArticleOptions/VerticalCardsArticleOptions";
import NumberedSteps from "../../components/NumberedSteps/NumberedSteps";
import styles from "./CtaModal.module.sass";
import ButtonContainedPrimary from "../../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import SignInForm from "../../components/SignInForm/SignInForm";
import { useState, useEffect } from "react";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";
import useSwipe from "../../hooks/useSwipe";

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
	// const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe(
	// 	increaseStep,
	// 	decreaseStep
	// );

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

	// const [touchStart, setTouchStart] = useState(0);
	// const [touchEnd, setTouchEnd] = useState(0);

	// function handleTouchStart(e) {
	// 	setTouchStart(e.targetTouches[0].clientX);
	// }

	// function handleTouchMove(e) {
	// 	setTouchEnd(e.targetTouches[0].clientX);
	// }

	// function handleTouchEnd() {
	// 	if (touchStart - touchEnd > 75) {
	// 		// do your stuff here for left swipe
	// 		increaseStep();
	// 	}

	// 	if (touchStart - touchEnd < -75) {
	// 		// do your stuff here for right swipe
	// 		decreaseStep();
	// 	}
	// }

	if (currentStep <= 1) {
		modalTitle = "Select your interest:";
		itemsForRender = <VerticalCardsCategoryOptions />;
	} else if (currentStep === 2) {
		modalTitle = "You might like:";
		itemsForRender = <VerticalCardArticleOptions />;
	} else if (currentStep >= 3) {
		modalTitle = "Sign In:";
		itemsForRender = (
			<div className={styles["sign-in"]}>
				<SignInForm />
			</div>
		);
	}

	useEffect(() => {
		const bodyElement = document.body;
		const htmlElement = document.documentElement;
		const scrollbarElement = document.createElement("div");
		const oldScrollbarElement = document.getElementById("scrollbar");
		// const scrollbarWidth =
		// 	window.innerWidth - document.documentElement.clientWidth;
		// console.log(scrollbarWidth);
		// htmlElement.style.marginRight = boolModalShow
		// 	? scrollbarWidth.toString()
		// 	: 5;
		// htmlElement.style.overflow = "auto";
		// htmlElement.style.marginRight = "10";
		bodyElement.style.overflowY = boolModalShow ? "hidden" : "auto";
		// htmlElement.classList.remove("scrollbar-fix");
		// boolModalShow && htmlElement.classList.add("scrollbar-fix");
		oldScrollbarElement &&
			oldScrollbarElement.parentElement.removeChild(oldScrollbarElement);
		scrollbarElement.id = "scrollbar";
		scrollbarElement.style.top = 0;
		scrollbarElement.style.right = 0;
		scrollbarElement.style.bottom = 0;
		scrollbarElement.style.position = "fixed";
		scrollbarElement.style.overflowY = "scroll";
		// boolModalShow && bodyElement.appendChild(scrollbarElement);
		// htmlElement.style.marginRight = boolModalShow ? "calc(100vw - 100%)" : 0;
		// return () => {
		// 	setTimeout(() => {}, 2000);
		// };
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
