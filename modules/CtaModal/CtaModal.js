import { useModal, useModalUpdate } from "./ModalContext";
import VerticalCardsCategoryOptions from "../../components/Cards/VerticalCardsCategoryOptions/VerticalCardsCategoryOptions";
import VerticalCardArticleOptions from "../../components/Cards/VerticalCardArticleOptions/VerticalCardArticleOptions";
import NumberedSteps from "../../components/NumberedSteps/NumberedSteps";
import styles from "./CtaModal.module.sass";
import ButtonContainedPrimary from "../../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import SignInForm from "../../components/SignInForm/SignInForm";

export default function CtaModal() {
	const modalState = useModal();
	const updateModal = useModalUpdate();
	let modalTitle = "";
	let itemsForRender;

	const handleButtonNext = () => {
		updateModal(modalState.currentStep + 1);
	};

	const handleButtonPrev = () => {
		updateModal(modalState.currentStep - 1);
	};

	switch (modalState.currentStep) {
		case 1:
			modalTitle = "Select your interest:";
			itemsForRender = <VerticalCardsCategoryOptions />;
			break;
		case 2:
			modalTitle = "You might like:";
			itemsForRender = <VerticalCardArticleOptions />;
			break;
		case 3:
			modalTitle = "Sign In:";
			itemsForRender = (
				<div className={styles["sign-in"]}>
					<SignInForm />
				</div>
			);
			break;
	}

	return (
		<div className={styles.wrapper}>
			<NumberedSteps />
			<span className={styles.title}>{modalTitle}</span>
			{itemsForRender}
			<div className={`${styles["buttons-wrapper"]}`}>
				<ButtonContainedPrimary
					type={modalState.currentStep === 1 ? "hide" : ""}
					onPress={handleButtonPrev}
				>
					Previous
				</ButtonContainedPrimary>
				<ButtonContainedPrimary
					type={modalState.currentStep === 3 ? "hide" : ""}
					onPress={handleButtonNext}
				>
					Next
				</ButtonContainedPrimary>
			</div>
		</div>
	);
}
