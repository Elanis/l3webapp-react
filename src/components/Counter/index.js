import /*React,*/ { useEffect, useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);
	//const [count2, setCount2] = React.useState(0);

	useEffect(() => {
		if(count % 2 === 0) {
			document.title = `Counter: ${count}`;
		}
	}, [count])

	return (
		<div>
			<p>Counter: {count}</p>
			<input 
				type="button"
				onClick={() => setCount(count + 1)}
				value="Press me !"
			/>
		</div>
	)
}