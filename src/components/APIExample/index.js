import createGame from '../../business/createGame';
import useGames from '../../hooks/useGames';

export default function APIExample() {
	const games = useGames();

	async function handleClick() {
		try {
			await createGame({
			  "id": 0,
			  "name": "Mon super jeu !",
			  "description": "string",
			  "logoUri": "string",
			  "prices": [
			    {
			      "value": 10,
			      "currency": "USD"
			    }
			  ]
			})
		} catch(e) {
			alert(e);
		}
	}

	return (
		<div>
			{games.map((x, i) => (<p key={i}>{x.name}</p>))}
			<input type="button" onClick={handleClick} value="Creer" />
		</div>
	);
}