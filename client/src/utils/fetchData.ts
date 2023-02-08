export default async function fetchData(url: string, error: string) {
	return fetch(url)
		.then((res) => res.json())
		.then((resJson) => resJson)
		.catch(() => {
			throw new Error(error);
		});
}
