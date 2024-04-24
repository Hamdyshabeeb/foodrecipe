import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from '../context/GlobalContext';

/**
 * Header component for the recipe application.
 * Provides navigation and search functionality.
 * @returns {JSX.Element} A React component representing the header.
 */

export default function Header() {
	const { search, setSearch, handelFormSubmit } = useContext(globalContext);

	return (
		<header>
			<h2>
				<Link to="/">Recipes</Link>
			</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log('submited');
					handelFormSubmit(
						`https://forkify-api.herokuapp.com/api/search?q=${search}`
					);
				}}
			>
				<input
					type="text"
					placeholder="Search recipes"
					aria-label="search recipes"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			<nav>
				<ul>
					<li>
						<Link to="/">Home </Link>
					</li>
					<li>
						<Link to="/favorites">Favorites </Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
