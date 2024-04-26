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
		<li className="w-full max-w-96  flex flex-col justify-start items-center overflow-hidden shadow-md rounded-lg  bg-white">
			<img
				className=" w-full h-72 mb-4   object-cover"
				src={image_url}
				alt={typeof title === 'string' ? title : 'recipe image'}
			/>
			<h3 className="text-xl leading-5 px-4 text-gray-700 font-bold tracking-wide">
				{title}
			</h3>
			<p className="  text-gray-400 text-sm mb-4">
				by <span className="text-gray-500 font-semibold ">{publisher} </span>{' '}
			</p>

			<Link
				className=" bg-orange-600 lg:px-7  px-2 lg:py-3  py-2 mt-auto mb-6  text-sm font-bold inline-block rounded-full text-white"
				to={`/recipe/:${id}`}
			>
				{' '}
				More Details{' '}
			</Link>
		</li>
	);
}
