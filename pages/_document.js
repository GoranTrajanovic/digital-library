import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Digital Library</title>
					<link rel="icon" href="/favicon.png" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
