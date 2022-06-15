import ButtonGoogleSignIn from "../Buttons/ButtonGoogleSignIn/ButtonGoogleSignIn";

export default function SignInForm({ signIn }) {
	return (
		<>
			<span>Do you want to set a custom Username?</span>
			<input type="text" placeholder="Your new username..." />
			<ButtonGoogleSignIn signIn={signIn} />
		</>
	);
}
