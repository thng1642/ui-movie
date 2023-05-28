import { useState } from 'react';
import * as React from 'react';

import { ResultContext } from '../../context/ResultContext';
import { Poster } from '../../components/poster/Poster';
import { urlImg } from '../../constants/endpoint/movieApi';
import './index.css'

export function ListResult() {

    const {results} = React.useContext(ResultContext)
    
    React.useEffect(()=>{
        console.log("List result: ", results);
    },[results])

    return (
        <div className='list-result'>
        {
            (results === null) ? <h1 style={
                {
                    color: "#fff"
                }
            }>Not found movie</h1> :
            results.map((element, key)=>(
                <Poster key={key} link_img={`${urlImg}/w500${element.poster_path}`} />
            ))
        }   
        </div>
    );
};