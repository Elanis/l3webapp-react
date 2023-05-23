export default async function createGame(game) {
	const res = await fetch('https://localhost:7075/api/Games', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(game)
	});

	if(!res.ok) {
		throw new Error(await res.text());
	}
}