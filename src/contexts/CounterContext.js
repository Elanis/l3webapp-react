import /*React,*/ { useEffect, useState, createContext } from 'react';

export const CounterContext = createContext();

export default function CounterContextProvider({ children }) {
	const [count, setCount] = useState(0);
	//const [count2, setCount2] = React.useState(0);
	
	useEffect(() => {
		if(count % 2 === 0) {
			document.title = `Counter: ${count}`;
		}
	}, [count]);

	return (
		<CounterContext.Provider value={{count, setCount}}>
			{children}
		</CounterContext.Provider>
	);
}