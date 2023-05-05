import { useState } from 'react';

import useCounter from '../../hooks/useCounter';

export default function Counter() {
	const { count, setCount } = useCounter();
	const [inputContent, setInputContent] = useState('');

	console.log(inputContent);

	return (
		<div>
			<p>Counter: {count}</p>
			<input 
				type="button"
				onClick={() => setCount(count + 1)}
				value="Press me !"
			/>

			<br />
			<input type="text" value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
			<input type="button" onClick={() => {

				///
				setInputContent('');
			}} />
		</div>
	)
}