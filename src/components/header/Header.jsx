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
		<header className=" shadow-md  text-sm md:text-base  bg-white">
			<div className="flex justify-between container mx-auto p-4 items-center font-semibold text-gray-500 gap-3 flex-wrap">
				<h2 className="order-1 text-orange-600 text-xl md:text-2xl">
					<Link to="/">Recipes</Link>
				</h2>
				<form
					className="order-3 lg:order-2 flex text-sm justify-self-center"
					onSubmit={(e) => {
						e.preventDefault();
						console.log('submited');
						handelFormSubmit(
							`https://forkify-api.herokuapp.com/api/search?q=${search}`
						);
					}}
				>
					<input
						className="bg-gray-100 rounded-s-full px-3 shrink outline-0 focus-visible:outline-0 font-normal md:px-4"
						type="text"
						placeholder="Search recipes"
						aria-label="search recipes"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						className="bg-gray-100 py-2 px-3 rounded-e-full font-normal hover:text-gray-600"
						type="submit"
					>
						Search
					</button>
				</form>
				<nav className="order-2 lg:order-3 ">
					<ul className="flex gap-2 lg:gap-7">
						<li>
							<Link className="btn" to="/">
								Home{' '}
							</Link>
						</li>
						<li>
							<Link className="btn" to="/favorites">
								Favorites{' '}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
