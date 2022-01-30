import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ animes }) => (
	<>
		<ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
			{animes.map((anime, index) => (
				<li key={index}>
					<Link to={{ pathname: `/anime/${anime.mal_id}` }}>
						<div className="group block w-3/4 aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
							<img src={anime.image_url} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
						</div>
					</Link>
					<p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{anime.title}</p>
				</li>
			))}
		</ul>
	</>
);

export default AnimeCard;