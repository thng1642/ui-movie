// @flow
import * as React from 'react';
import './index.css'
import { getDetailsMovie } from '../details/script';

export function Poster({link_img, id}) {

    const  clickPoster = function() {
        console.log("Movie id: ", id);
        getDetailsMovie(id);
    }

    return (
        <div className='poster animation-hover' >
            <img src={link_img} alt="poster"></img>
        </div>
    );
};