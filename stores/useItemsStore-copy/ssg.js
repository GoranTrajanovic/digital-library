import Library from "../../";

export default function LibrarySSG() {
	return <Page />;
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken,
	});

	const res = await client.getEntries({ content_type: "contentItem" });

	return {
		props: {
			initialItems: res.items,
		},
	};
}
