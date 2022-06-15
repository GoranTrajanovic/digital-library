import styles from "./ButtonGoogleSignIn.module.sass";

export default function ButtonGoogleSignIn({ signIn }) {
	return (
		<button className={styles.button} onClick={() => signIn()}>
			<span></span>Sign In with Google
		</button>
	);
}
