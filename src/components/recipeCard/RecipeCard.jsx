import { Link } from 'react-router-dom';

export default function RecipeCard({ recipeItem }) {
	const { title, image_url, publisher, recipe_id: id } = recipeItem;
	return (
		<li>
			<img src={image_url} alt={title} />
			<h3>{title} </h3>
			<p>
				by <span>{publisher} </span>{' '}
			</p>

			<Link to={`/recipe/:${id}`}> More Details </Link>
		</li>
	);
}
