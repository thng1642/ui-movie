// @flow
import * as React from 'react';
import YouTube from 'react-youtube';
import './index.css'
import { DetailContext } from '../../context/DetailContext';

export function MovieDetail() {

    const {movie} = React.useContext(DetailContext)

    const [isYoutube, setIsYoutube] = React.useState(true)

    React.useEffect(()=> {

        if (movie.videos === null) {
            setIsYoutube(false)
        }
    }, [])

    // if (!isOpen) return null

    return (
        <div className='movie-detail hidden'>

            {/* Overview information movie */}
            <div>
                <h3 className='mb-24'>{movie.title}</h3>

                <div className='general-info mb-24'>
                    <p>Release Date:{movie.release_date}</p>
                    <p>Vote:{movie.vote_average}/10</p>
                </div>
                
                <p>{movie.overview}</p>
            </div>
            {/* Youtube or Backdrop */}
            {
                (isYoutube) ? <YouTube className='youtube' videoId={movie.videos?.key} 
                    opts={{
                        height: '400',
                        width: '100%',
                        playerVars: {
                            autoplay: 0,
                        },
                    }}/> :
                <div>
                    <img src={movie.backdrop_path} alt='backdrop path'></img>
                </div>
            }
            {/* Demo */}
        </div>
    );
};