
// @flow
import * as React from 'react';
import './index.css'
import { searchMovies } from '../details/script';
import { ResultContext } from '../../context/ResultContext';

export default function SearchBox() {


    const [search, setSearch] = React.useState(null)

    const {setResults} = React.useContext(ResultContext)

    const sendSearchKey = function() {

        console.log("Search Key: ", search);
    }

    return (
        <div className='search-box mb-64'>
            {/* Search bar */}
            <div className='search-bar'>
                <input type='text' value={search} name='search' placeholder='Tìm kiếm' 
                    onChange={(event)=>{
                        
                        setSearch(event.target.value)
                    }}
                />
                {/* Button Search */}
                <div className='search-btn' onClick={sendSearchKey}>
                    <svg
                        className='svg-inline--fa fa-search fa-w-16'
                        fill='#ccc'
                        aria-hidden='true'
                        data-prefix='fas'
                        data-icon='search'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                    </svg>
                </div>
            </div>
            
            {/* Action bar */}
            <div className='action-bar'>

                <button type='button' className='action-reset'
                    onClick={()=>{

                        setSearch('')

                        const input = document.querySelector('.search-bar').querySelector('input')

                        input.focus()
                    }}
                >Reset</button>

                <button type='button' className='action-send'
                    onClick={()=>{
                        
                        if (search === null || search === '') {

                            const input = document.querySelector('.search-bar').querySelector('input')

                            input.focus()
                        } else {
                            //  Call api
                            const fetchingSearch = async () => {

                                const [res, error] = await searchMovies(search)

                                // console.log("Response: ", res);

                                setResults([...res])
                            }
                            fetchingSearch()
                        }
                        
                    }}
                >Search</button>
                
            </div>
        </div>
    );
};