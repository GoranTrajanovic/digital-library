const path = require("path");

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `@import "styles/globals.sass"`,
	},
	images: { domains: ["images.ctfassets.net"] },
};
