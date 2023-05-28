import axios from "axios";

export default function MovieApi(endpoint, method, data) {
    
    const baseUrl = 'http://localhost:5000/api/movies';
    
    const header = {
        "Content-Type": 'application/json',
    }
    
    return axios(
        {
            headers: header,
            method: method,
            url: baseUrl + endpoint,
            data: data,
        }
    ).then(
        responsive => {
            const result = responsive.data
            // console.log("Results: ", result)
            return [result, null]
        }
    ).catch(error => {
        // if (error.response) {      
        //     const errorRes = error.response;
        // }
        
        return [null, error.response]
    })
}