import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard';

const Home = () => {
	const [anime, setAnime] = useState([])
	const [query, setQuery] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			try {
				const {data} = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
				setAnime(data.results)
			} catch (error) {
				console.error(error)
			}
		}
	
		fetchData()
	}, [query])

	return (
		<>
			<div>
				<div className="pt-2 flex justify-center relative text-gray-600">
					<input className="border-2 w-3/4 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
						type="search" name="search" placeholder="Search" onChange={event => setQuery(event.target.value)}
						value={query} />
					<button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
					</button>
				</div>
			</div>
			<div className="max-w-4xl mx-auto flex justify-center">
				<AnimeCard animes={anime} />
			</div>
		</>
	)
};

export default Home;