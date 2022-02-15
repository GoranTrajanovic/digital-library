import Head from "next/head";
import Layout from "../modules/Layout/Layout";
import "../styles/globals.css";

const ModalShowContext = React.createContext(false);

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Digital Library</title>
			</Head>
			<ModalShowContext.Provider value={false}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ModalShowContext.Provider>
		</>
	);
}

export default MyApp;
