import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../modules/Layout/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Digital Library</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
