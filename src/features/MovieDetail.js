import { api_key, url } from "../constants/endpoint/movieApi"

export default function getMovieDetail(movie) {
    let movDetail = {
        'title': movie.title,
        'release': movie.release_date,
        'vote': movie.vote_average,
    }
    // get video from db by id
    fetch(url+`/movie/${movie.id}/videos?api_key=${api_key}`)
		.then((res)=>res.json())
		.then((res)=>{
			console.log("Responsive: ", res);
            movDetail.test = res
		})
        .catch((response)=>{
            console.log(response.status_message);
        }) 

    return movDetail
}