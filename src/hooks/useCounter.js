import { useContext } from 'react';

import { CounterContext } from '../contexts/CounterContext';

export default function useCounter() {
	const { count, setCount } = 
		useContext(CounterContext);

	return { count, setCount };
}