import { useState, useContext, createContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.sass";

export const ModalShowContext = createContext();

export default function Layout({ children }) {
	const [modalShow, setModalShow] = useState(false);
	console.log("started with state: " + modalShow);
	return (
		<ModalShowContext.Provider value={{ modalShow, setModalShow }}>
			<Header />
			{children}
			<Footer />
		</ModalShowContext.Provider>
	);
}
