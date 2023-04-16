// @flow
import * as React from 'react';
import YouTube from 'react-youtube';


export function MovieDetail({props}) {
    return (
        <div className='movie-detail'>
            {/* Overview information movie */}
            <div>
                <h3>{props.title}</h3>
                <p>{props.release_date}</p>
                <p>{props.vote_average}</p>
                <p>{props.overview}</p>
            </div>
            {/* Youtube or Backdrop */}
            {
                (props.isYoutube) ? <YouTube videoId={props.key} 
                    opts={props.opts}/> :
                <div>
                    <img src={props.link_img} alt='backdrop path'></img>
                </div>
            }
            
        </div>
    );
};