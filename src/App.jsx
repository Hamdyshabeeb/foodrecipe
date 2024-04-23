import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Recipe from './pages/recipe/Recipe';

export default function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/recipe/:id" element={<Recipe />} />
			</Routes>
		</div>
	);
}
