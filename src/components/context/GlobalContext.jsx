import { useState, createContext } from 'react';

/**
 * Context for managing global application state.
 * Provides search functionality and manages recipe data.
 * @type {import('react').Context}
 */
export const globalContext = createContext(null);

/**
 * Global context provider component.
 * Manages the global application state and provides it through context.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components wrapped by this context provider.
 * @returns {JSX.Element} A React component representing the global context provider.
 */

export default function GlobalContext({ children }) {
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);
	const [recipes, setRecipes] = useState({});
	const [favorites, setFavorites] = useState([]);
	const [recipeDetails, setRecipeDetails] = useState(null);

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
			value={{
				search,
				setSearch,
				handelFormSubmit,
				status,
				error,
				recipes,
				favorites,
				setFavorites,
				recipeDetails,
				setRecipeDetails,
			}}
		>
			{children}
		</globalContext.Provider>
	);
}
