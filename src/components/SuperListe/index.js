export default function SuperListe({ content }) {
	return (
		<ul>
			{content.map((x, i) => <li key={i}>{x}</li>)}
		</ul>
	)
}

export function SuperListeMapHorsDOM({ content }) {
	const liste = content.map((x) => <li>{x}</li>);

	return (
		<ul>
			{liste}
		</ul>
	)
}

export function SuperListeMapFor({ content }) {
	const liste = [];
	for(const element of content) {
		liste.push(<li>{element}</li>);
	}

	return (
		<ul>
			{liste}
		</ul>
	)
}