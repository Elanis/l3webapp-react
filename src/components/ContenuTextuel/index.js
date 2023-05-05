import Counter from '../Counter';
import SuperListe from '../SuperListe';

export default function ContenuTextuel() {
	const liste = [
		'Un',
		'Deux',
		'Trois',
	];

	return (
		<>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</div>
			<SuperListe content={liste} />
			<Counter />
		</>
	)
}
