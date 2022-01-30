import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Anime = () => {
	const [anime, setAnime] = useState([]);
	const { mal_id } = useParams();

	const loadAnime = () => {
		try {
			axios
				.get(`https://api.jikan.moe/v3/anime/${mal_id}`)
				.then((response) => {
					console.log(response.data);
					setAnime(response.data);
				})
				.catch((err) => {
					console.log(err.response);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadAnime();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return (
		<>
			<div className="mt-5 max-w-6xl mx-auto grid grid-cols-6 gap-x-4">
				<div className="col-span-2">
					<section aria-labelledby="section-1-title">
						<img src={anime.image_url} alt="" className="h-full w-full" />
					</section>
					<div className="max-w-md mt-5">
						<Link to={{ pathname: `/` }}>
							<div className="w-1/4 px-3 py-2 bg-purple-500 rounded-sm shadow">
								<p className="text-black flex justify-center">Back</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-span-4">
					<section aria-labelledby="section-2-title">
						<h1 className="text-3xl mt-2">Synopsis</h1>
						<p className="w-full mt-5">{anime.synopsis}</p>
						<div className="flex mt-10 space-x-2">
							<div className='bg-blue-200 px-10 py-5 rounded-sm shadow'><div className="font-medium text-lg">{anime.score}</div><p className="text-lg font-medium">Ratings</p></div>
							<div className='bg-purple-200 px-10 py-5 rounded-sm shadow'><div className="font-medium text-lg">{anime.popularity}</div><p className="text-lg font-medium">Popularity</p></div>
							<div className='bg-red-200 px-10 py-5 rounded-sm shadow'><div className="font-medium text-lg">{anime.rank}</div><p className="text-lg font-medium">Rank</p></div>
							<div className='bg-green-200 px-10 py-5 rounded-sm shadow'><div className="font-medium text-lg">{anime.members}</div><p className="text-lg font-medium">Members</p></div>
						</div>
					</section>
				</div>
			</div>
		</>
	);

};

export default Anime;