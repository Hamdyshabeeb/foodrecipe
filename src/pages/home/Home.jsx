import { useContext } from 'react';
import { globalContext } from '../../components/context/GlobalContext';
import RecipeCard from '../../components/recipeCard/RecipeCard';

export default function Home() {
	const { recipes: recipeData, status, error } = useContext(globalContext);
	if (status === 'error') return <div>{error.message} </div>;
	if (status === 'loading') return <div> Please Wait Fetching Data... </div>;
	if (status === 'idle') return <div> Search for recipe name </div>;
	return (
		<ul>
			{recipeData.recipes.map((recipe) => (
				<RecipeCard key={recipe.recipe_id} recipeItem={recipe} />
			))}
		</ul>
	);
}
