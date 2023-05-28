import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getActionMovies, getTopRate, getTrending, getComedyMovies, getHorrorMovies, getRomanceMovies, getDocumentariesMovies } from '../../components/details/script';
import { ListMovie } from '../../components/listMovie/ListMovie';
import NavBar from "../../components/navigation/NarBar";
import { Poster } from '../../components/poster/Poster';
import { api_key, url, urlImg } from '../../constants/endpoint/movieApi';
import './index.css';
import { DetailProvider } from '../../context/DetailContext';
import MovieApi from '../../features/api/MovieApi';

function Browse() {

	const [movieTrend, setMovieTrend] = useState([])
	const [movieOriginal, setMovieOriginal] = useState([])
	const [actionMovies, setActionMovies] = useState([])
	const [listTop, setListTop] = useState([])
	const [listTrend, setListTrend] = useState([])
	const [comedyMovies, setComedyMovies] = useState([])
	const [horrorMovies, setHorrorMovies] = useState([])
	const [romanceMovies, setRomanceMovies] = useState([])
	const [documentaries, setDocumentaries] = useState([])

	useEffect(()=>{
		fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=98185472a40af87beb60747f484d10c6")
		.then((res) => res.json())
		.then((res)=>{
			setMovieTrend(res.results)
			// console.log("Response: ", res);
		})
		
	}, [])

	useEffect(()=>{
		fetch(url+`/discover/tv?api_key=${api_key}&with_network=123&language=en-US`)
		.then((res)=>res.json())
		.then((res)=>{
			// console.log("Responsive: ", res);
			setMovieOriginal(res.results)
			
		})
	},[])

	useEffect(()=>{
		
			// Third API
			// const fetchMoviesTrending = async () => {
			// 	const [response, error] = await getTrending('trending');	
			// 	// console.log("Responsive: ", response);
			// 	setListTrend([...response])
				
			// }
			/**
			 * Get list movies trending on server
			 */
			const fetchMoviesTrending = async () => {
				const [response, error] = await MovieApi('/trending?userId=User 01&token=8qlOkxz4wq', 'GET')
				
				if ( response ) {

					// console.log("Response", response)
					setListTrend([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchMoviesTrending()

			// Getting top rate movies from server
			const fetchTopMovies = async () => {

				const [response, error] = await MovieApi('/top-rate?userId=User 01&token=8qlOkxz4wq', 'GET')
				
				if ( response ) {

					// console.log("Response Top rate", response)
					setListTop([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchTopMovies()

			// get movies action with id 28
			const fetchingActionMovies = async () => {
				const [response, error] = await MovieApi('/discover?genre=28&page=1&userId=User 01&token=8qlOkxz4wq', 'GET')

				if ( response ) {

					// console.log("Response Action movies", response)
					
					setActionMovies([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchingActionMovies()
			
			// Get movies comedy with id 35
			const fetchingComedyMovies = async () => {

				const [response, error] = await MovieApi('/discover?genre=35&page=1&userId=User 01&token=8qlOkxz4wq', 'GET')

				if ( response ) {

					// console.log("Response Action movies", response)
					
					setComedyMovies([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchingComedyMovies()

			// Get movies horror with id 27
			const fetchingHorrorMovies = async () => {
				const [response, error] = await MovieApi('/discover?genre=27&page=1&userId=User 01&token=8qlOkxz4wq', 'GET')

				if ( response ) {

					// console.log("Response Action movies", response)
					
					setHorrorMovies([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchingHorrorMovies()
			
			// Get movies Romance with id 10749
			const fetchingRomanceMovies = async () => {

				const [response, error] = await MovieApi('/discover?genre=10749&page=1&userId=User 01&token=8qlOkxz4wq', 'GET')

				if ( response ) {

					// console.log("Response Action movies", response)
					setRomanceMovies([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchingRomanceMovies()
			
			// Get movies documentaries with id 99
			const fetchingDocumentariesMovies = async () => {
				const [response, error] = await MovieApi('/discover?genre=99&page=1&userId=User 01&token=8qlOkxz4wq', 'GET')

				if ( response ) {

					console.log("Response Documentaries movies", response)
					setDocumentaries([...response.results])
				} else {
					console.log("Error trending: ", error.data)
				}
			}
			fetchingDocumentariesMovies()
		
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
			<div id='original' className='mb-64'>
			{
				movieOriginal.map((item, index)=>(
					<Poster link_img={`${urlImg}/w500${item.poster_path}`}  key={index} id={item.id}/>
				))
			}
			</div>
			<DetailProvider>
				{/* Trending movies */}
				<ListMovie items={listTrend} name={'Xu hướng'} id={'trending'}/>

				{/* Top rate movies */}
				<ListMovie items={listTop} name={'Xếp hạng cao'} id={'top-rate'} />

				{/* Action movies */}
				<ListMovie items={actionMovies} name={'Hành động'} id={'action-movie'} />

				{/* Comedy movies  */}
				<ListMovie items={comedyMovies} name={'Hài'} id={'comedy-movie'} />

				{/* Horror movies */}
				<ListMovie items={horrorMovies} name={'Kinh dị'} id={'horror-movie'} />

				{/* Romance movies */}
				<ListMovie items={romanceMovies} name={'Lãng mạng'} id={'romance-movie'} />

				{/* Documentaries */}
				<ListMovie items={documentaries} name={'Tài liệu'} id={'documentaries'} />

			</DetailProvider>
			
		</>
	);
}

export default Browse;

