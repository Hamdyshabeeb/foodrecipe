import { useContext } from 'react';
import { globalContext } from '../../components/context/GlobalContext';
import RecipeCard from '../../components/recipeCard/RecipeCard';

export default function Home() {
	const { recipes: recipeData, status, error } = useContext(globalContext);
	if (status === 'error')
		return (
			<div className="wrapper">
				<p className="text-3xl">{error.message}</p>{' '}
			</div>
		);
	if (status === 'loading')
		return (
			<div className="wrapper">
				<p className="text-3xl">Please Wait Fetching Data... </p>
			</div>
		);
	if (status === 'idle')
		return (
			<div className="wrapper">
				{' '}
				<p className="text-3xl">Search for recipe name</p>{' '}
			</div>
		);
	return (
		<ul className="wrapper">
			{recipeData.recipes.map((recipe) => (
				<RecipeCard key={recipe.recipe_id} recipeItem={recipe} />
			))}
		</ul>
	);
}
