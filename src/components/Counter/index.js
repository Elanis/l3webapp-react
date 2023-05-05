import useCounter from
	'../../hooks/useCounter';

export default function Counter() {
	const { count, setCount } = useCounter();

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