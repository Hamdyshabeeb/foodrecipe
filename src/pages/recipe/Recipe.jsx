import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { globalContext } from '../../components/context/GlobalContext';

export default function Recipe() {
	const { id } = useParams();
	const { recipeDetails, setRecipeDetails, favorites, handelFavorites } =
		useContext(globalContext);

	const isFavorite = favorites.findIndex((recipe) => recipe.recipe_id === id);

	useEffect(() => {
		async function getRecipeDetails(url) {
			try {
				const res = await fetch(url);
				const result = await res.json();
				if (result) setRecipeDetails(result);
			} catch (error) {
				console.log(error.message);
			}
		}
		getRecipeDetails(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
	}, [id]);

	if (!recipeDetails) return <p> no data</p>;

	return (
		<div className="wrapper lg:grid lg:grid-cols-2 lg:shadow-sm lg:bg-white lg:p-0 ">
			<div className="lg:bg-gray-200  lg:flex lg:justify-center lg:items-center">
				<img
					className=" w-2/3  max-w-80 aspect-square rounded-full mx-auto object-cover border-white border-8 shadow-md"
					src={recipeDetails.recipe.image_url}
					alt={recipeDetails.recipe.title}
				/>
			</div>

			<div className="mt-4 lg:text-left lg:p-5 lg:px-6">
				<div className="border-b-2 lg:border-b-4 lg:border-gray-200">
					<h2 className="text-3xl lg:text-4xl text-gray-700 tracking-wide leading-7   font-bold">
						{recipeDetails.recipe.title}
					</h2>
					<p className="text-sm lg:text-base font-semibold text-gray-400 mt-1 lg:mt-2 ">
						by <span> {recipeDetails.recipe.publisher}</span>
					</p>
					<button
						className="callBtn mt-5 lg:mt-7 lg:mb-10   "
						onClick={() => handelFavorites(recipeDetails.recipe)}
					>
						{isFavorite > -1 ? 'Remove from favorites' : 'Add to favorites'}
					</button>
				</div>

				<div className="mt-3 lg:mt-6">
					<h3 className="text-2xl tracking-wide text-gray-700 font-bold text-center lg:text-left lg:text-3xl">
						Ingredient
					</h3>

					<ul className="mt-2 text-left text-sm lg:text-base text-gray-500">
						{recipeDetails.recipe.ingredients.map((ingredient, index) => (
							<li className="mb-2" key={index}>
								{ingredient}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
