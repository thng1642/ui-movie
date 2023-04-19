import axios from "axios";
import { api_key, url } from "../../constants/endpoint/movieApi";
import { GET } from "../../constants/http/httpMethod";

/**
 * 
 * @param {[]} listVideo list of videos 
 */
function filterTrailerYoutube(listVideo) {

    let trailer = null
    let isTeaser = false


    for (let i = 0; i < listVideo.length; i++) {
        const element = listVideo[i];
        if (element.site === 'YouTube') {

            if (element.type === 'Trailer') {
                
                trailer = {...element}
                break
            }
            
            else if (element.type === 'Teaser') {

                if (!isTeaser) { 
                    isTeaser = true
                    trailer = {...element}
                }
            }
        }
    }

    return trailer
}

export function getDetailsMovie(id) {

    return axios({
        method: GET,
        url: `${url}/movie/${id}/videos?api_key=${api_key}`,
        // url: `${url}/movie/${id}?api_key=${api_key}`,
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            
            return [filterTrailerYoutube(response.data.results), null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })

    // // gets trailer
    // try {
    //     const res = await axios.get(`${url}/movie/${id}/videos?api_key=${api_key}`)
    //     console.log("Result videos:", res.data);
    // } catch(error) {
    //     console.log(error);
    // }

    // console.log("Results: ", results)

    // return results
}

export function getTrending(action) {
    return axios({
        method: GET,
        url: url + `/${action}/movie/week?api_key=`+api_key,
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getTopRate() {
    return axios({
        method: GET,
        url: url + `/movie/top_rated?api_key=`+api_key+'&language=en-US',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getActionMovies() {
    return axios({
        method: GET,
        url: url + `/discover/movie?api_key=`+api_key+'&with_genres=28',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getComedyMovies() {
    return axios({
        method: GET,
        url: url + `/discover/movie?api_key=`+api_key+'&with_genres=35',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getHorrorMovies() {
    return axios({
        method: GET,
        url: url + `/discover/movie?api_key=`+api_key+'&with_genres=27',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getRomanceMovies() {
    return axios({
        method: GET,
        url: url + `/discover/movie?api_key=`+api_key+'&with_genres=10749',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function getDocumentariesMovies() {
    return axios({
        method: GET,
        url: url + `/discover/movie?api_key=`+api_key+'&with_genres=99',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}

export function searchMovies(query) {

    return axios({
        method: GET,
        url: url + `/search/movie?api_key=`+api_key+'&language=en-US&query='+query,
        headers: {
            "Content-Type": 'application/json'
        }
    }).then(
        response => {
            return [response.data.results, null]
        }
    )
    .catch(error => {
        const errorRes = error.response.data;
        return [null, errorRes]
    })
}