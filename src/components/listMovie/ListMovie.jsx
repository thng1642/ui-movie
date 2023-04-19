
// @flow
import * as React from 'react';
import { Card } from '../card/Card';
import './index.css'
import { MovieDetail } from '../details/MovieDetail';

export function ListMovie({items, name, id}) {
    return (
        <section className='list-container mb-64' id={id}>
            <h2 className='ml-12'>{name}</h2>
            <div className='list-movie'>
            {
                items.map((value, index) => (
                    <Card movieDetail={value} key={index}/>
                ))
            }
            </div>
            <MovieDetail />
        </section>
    );
};