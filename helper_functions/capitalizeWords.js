export default function capitalizeWords(str) {
	const words = str.split(" ");
	return [words.map(word => word.charAt(0).toUpperCase)].join(" ");
}
