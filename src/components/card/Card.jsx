
// @flow
import * as React from 'react';
import { useContext } from 'react';
import { urlImg } from '../../constants/endpoint/movieApi';
import { DetailContext } from '../../context/DetailContext';
import { getDetailsMovie } from '../details/script';
import './index.css';

export function Card({movieDetail}) {
    
    const {movie, setMovie, currentSection ,setCurrentSection} = useContext(DetailContext)

    return (
        <div className='animation-hover' onClick={(event)=>{

            let passMovie = {...movie}
            
            console.log("Current ID: ", currentSection);

            const fetchingDetail = async ()=> {
                const [response, error] = await getDetailsMovie(movieDetail.id)

                const dumpMovie = {
                    'id': movieDetail.id,
                    'title': movieDetail.title,
                    'overview': movieDetail.overview,
                    'release_date': movieDetail.release_date,
                    'vote_average': movieDetail.vote_average,
                    'backdrop_path': movieDetail.backdrop_path,
                    'videos': response
                }
                
                setMovie({...dumpMovie})
            }
            fetchingDetail()

                const listMovie = event.target.parentNode.parentNode.parentNode;

                

                const detail = listMovie.querySelector('.movie-detail')
                
                detail.classList.toggle('hidden')

                if (passMovie.id !== movieDetail.id) {

                    detail.classList.remove('hidden')
                }
                
                // đóng cái details của section cũ
                if (currentSection !== listMovie.getAttributeNode('id').value && currentSection !== '') {
                
                    let id = '#'+currentSection

                    setCurrentSection(listMovie.getAttributeNode('id').value)

                    const passDetail = document.querySelector(id).querySelector('.movie-detail')

                    console.log(passDetail);

                    // hidden pass Detail movie
                    passDetail.classList.add('hidden')
                }
                if (currentSection === '') {
                    let id = listMovie.getAttributeNode('id').value
                    setCurrentSection(id)
                }
        }}>
            <img src={`${urlImg}/original${movieDetail.backdrop_path}`} alt='backdrop'></img>
        </div>
    );
};