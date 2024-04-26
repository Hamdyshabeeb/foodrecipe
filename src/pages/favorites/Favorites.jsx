import { useContext } from 'react';
import { globalContext } from '../../components/context/GlobalContext';
import RecipeCard from '../../components/recipeCard/RecipeCard';

export default function Favorites() {
	const { favorites, setFavorites } = useContext(globalContext);

	if (favorites.length === 0)
		return (
			<div className="wrapper">
				<p>No Favorite Recipes</p>{' '}
			</div>
		);
	return (
		<ul className="wrapper card-container">
			{favorites.map((recipe) => (
				<RecipeCard key={recipe.recipe_id} recipeItem={recipe} />
			))}
		</ul>
	);
}
