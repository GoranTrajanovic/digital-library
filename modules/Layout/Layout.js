import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.sass";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
