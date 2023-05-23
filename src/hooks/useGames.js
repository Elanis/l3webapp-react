import { useEffect, useState } from 'react';


export default function useGames() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		async function callAPI() {
			const res = await fetch('https://localhost:7075/api/Games');
			setGames(await res.json());
		}

		callAPI();
	}, []);

	return games;
}