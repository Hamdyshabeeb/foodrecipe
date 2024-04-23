import { useState, createContext } from 'react';

export const globalContext = createContext(null);

export default function GlobalContext({ children }) {
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);
	const [recipes, setRecipes] = useState({});

	function handelFormSubmit(url) {
		async function fetchData(url) {
			setStatus('loading');
			setError('null');
			try {
				const res = await fetch(url);
				const data = await res.json();
				if (res.ok) {
					setRecipes(data);
					setError(null);
					setStatus('sucess');
				} else {
					throw new Error(res.statusText);
				}
			} catch (error) {
				setRecipes({});
				setError(error);
				setStatus('error');
			}
		}

		fetchData(url);
	}

	return (
		<globalContext.Provider
			value={{ search, setSearch, handelFormSubmit, status, error, recipes }}
		>
			{children}
		</globalContext.Provider>
	);
}
