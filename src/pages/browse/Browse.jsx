import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
import NavBar from "../../components/navigation/NarBar";
import { GET } from '../../constants/http/httpMethod';
import TrendApi from '../../features/api/TrendApi';
import { api_key, url, urlImg } from '../../constants/endpoint/movieApi';
import { Poster } from '../../components/poster/Poster';
import { MovieDetail } from '../../components/details/MovieDetail';
import getMovieDetail from '../../features/MovieDetail';

function Browse() {

	const [movieTrend, setMovieTrend] = useState([])
	const [movieOriginal, setMovieOriginal] = useState([])
	const [movieDetail, setMovieDetail] = useState({})

	useEffect(()=>{
		fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=98185472a40af87beb60747f484d10c6")
		.then((res) => res.json())
		.then((res)=>{
			setMovieTrend(res.results)
			// console.log("Response: ", res);
		})
		
	}, [])

	useEffect(()=>{
		fetch(url+`/discover/tv?api_key=${api_key}&with_network=123`)
		.then((res)=>res.json())
		.then((res)=>{
			// console.log("Responsive: ", res);
			setMovieOriginal(res.results)
		})
	},[])

	useEffect(()=>{
		let tmp = getMovieDetail()
		console.log("Tmp: ", tmp);
	}, [])
	return (
		<>
			<NavBar />
			<Carousel className='carousel-movies'>
				{
				movieTrend.map((item, index)=>(
					<Carousel.Item key={index} interval={3000} className='relative'>
						<img
							className="d-block w-100 img-slide"
							src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
							alt="Slides"
						/>
						
						<div className='caption-side'>
							<h2 className='mb-24'>{item.title}</h2>
							{/* List button action */}
							<div className='mb-8 action-btn'>
								<button>Play</button>
								<button>MyList</button>
							</div>
							{/* Overview */}
							<p>{item.overview}</p>
						</div>
					</Carousel.Item>
				))
				}
				
			</Carousel>
			{/* Original movie */}
			<div id='original' className='mb-32'>
			{
				movieOriginal.map((item, index)=>(
					<Poster link_img={`${urlImg}/original${item.poster_path}`}  key={index} />
				))
			}
			</div>
			
		</>
	);
}

export default Browse;

