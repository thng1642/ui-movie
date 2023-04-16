import axios from "axios";

export default function TrendApi(endpoint, method) {
    
    const baseUrl = 'https://api.themoviedb.org/3/';
    
    const header = {
        "Content-Type": 'application/json',
    }
    
    return axios(
        {
            headers: header,
            method: method,
            url: baseUrl + endpoint,
        }
    ).then(
        responsive => {
            const result = responsive.data
            console.log("Results: ", result)
            return [result, null]
        }
    ).catch(error => {
        if (error.response) {

            const errorRes = error.response;
        }
        
        return [null, error.response]
    })
}