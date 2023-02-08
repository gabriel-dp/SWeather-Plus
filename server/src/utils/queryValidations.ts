export default function checkQueries(receivedQuery: object, expectedQuery: string[]) {
	let received = Object.keys(receivedQuery);
	let expected = Array.from(expectedQuery);

	function removeElement(element: string, array: string[]) {
		const index = array.indexOf(element);
		if (index !== -1) {
			array.splice(index, 1);
		}
		return array;
	}

	expectedQuery.forEach((value) => {
		if (received.includes(value)) {
			expected = removeElement(value, expected);
			received = removeElement(value, received);
		}
	});

	if (expected.length > 0) throw new Error(`Missing queries: [${expected.join(", ")}]`);
	else if (received.length > 0) throw new Error(`Unknown queries: [${received.join(", ")}]`);
}
