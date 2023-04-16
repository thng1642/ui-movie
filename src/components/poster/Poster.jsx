// @flow
import * as React from 'react';
import './index.css'

export function Poster({link_img}) {
    return (
        <div className='poster'>
            <img src={link_img} alt="poster"></img>
        </div>
    );
};