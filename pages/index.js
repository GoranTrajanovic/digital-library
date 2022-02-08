import ButtonContainedPrimary from "../components/Buttons/ButtonContainedPrimary/ButtonContainedPrimary";
import ButtonContainedSecondary from "../components/Buttons/ButtonContainedSecondary/ButtonContainedSecondary";
import ButtonCTA from "../components/Buttons/ButtonCTA/ButtonCTA";
import ButtonOutlinedConfirmation from "../components/Buttons/ButtonOutlinedConfirmation/ButtonOutlinedConfirmation";
import ButtonOutlinedPrimary from "../components/Buttons/ButtonOutlinedPrimary/ButtonOutlinedPrimary";
import ButtonSymbol from "../components/Buttons/ButtonSymbol/ButtonSymbol";
import ButtonText from "../components/Buttons/ButtonText/ButtonText";

export default function Home() {
	return (
		<>
			<p>
				Voluptate occaecat ipsum amet ut nulla ex dolor. Ea cillum minim aliqua
				pariatur eu id proident duis aliqua. Nisi commodo proident velit velit
				id irure exercitation anim aliquip occaecat eiusmod enim irure. Esse
				sint in id tempor fugiat. Adipisicing aliqua veniam enim elit ullamco
				fugiat occaecat.
			</p>
			<ButtonCTA />
			<ButtonContainedPrimary type="symbol-left-bookmark" />
			<ButtonContainedPrimary type="" />
			<ButtonContainedSecondary selected="" />
			<ButtonContainedSecondary selected="yes" />
			<ButtonOutlinedPrimary type="symbol-left-bookmark" />
			<ButtonContainedSecondary type="symbol-left-bookmark">
				AI
			</ButtonContainedSecondary>
			<ButtonOutlinedConfirmation type="symbol-left-done" />
			<ButtonText />
			<ButtonText color="light" />
			<div style={{ width: "200px", height: "200px", background: "#424242" }}>
				<ButtonText color="light" boolDarkBackground={true} />
			</div>
			<ButtonSymbol />
		</>
	);
}
