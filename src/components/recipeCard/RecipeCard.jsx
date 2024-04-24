import { Link } from 'react-router-dom';

/**
 * Renders a card displaying information about a recipe.
 * @param {Object} props - The props object.
 * @param {Object} props.recipeItem - The recipe item object containing information about the recipe.
 * @param {string} props.recipeItem.title - The title of the recipe.
 * @param {string} props.recipeItem.image_url - The URL of the recipe image.
 * @param {string} props.recipeItem.publisher - The publisher of the recipe.
 * @param {string} props.recipeItem.recipe_id - The ID of the recipe.
 * @returns {JSX.Element} A React component representing the recipe card.
 */

export default function RecipeCard({ recipeItem }) {
	const { title, image_url, publisher, recipe_id: id } = recipeItem;
	return (
		<li>
			<img
				src={image_url}
				alt={typeof title === 'string' ? title : 'recipe image'}
			/>
			<h3>{title} </h3>
			<p>
				by <span>{publisher} </span>{' '}
			</p>

			<Link to={`/recipe/:${id}`}> More Details </Link>
		</li>
	);
}
