import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ResultContext } from '../../context/ResultContext';
import MovieApi from '../../features/api/MovieApi';
import './index.css';

export default function SearchBox() {

    const [search, setSearch] = React.useState(null)
    const {setResults} = React.useContext(ResultContext)
    const [genres, setGenres] = React.useState([])
    const [genreId, setGenreId] = React.useState('')
    const listMedia =
        [
            {
                key : "all",
                value: "All"
            },
            {
                key: "movie",
                value: "Movie"
            },
            {
                key: "tv",
                value: 'TV'
            },
            {
                key: "person",
                value: "Person"
            }
        ]
    const languages = [
        {
            key: "en-us",
            value: "English"
        },
        {
            key: "jp",
            value: "Japanese"
        },
        {
            key: "kr",
            value: "Korea"
        }
    ]
    const [year, setYear] = React.useState('')
    const [language, setLanguage] = React.useState('')
    const [media, setMedia] = React.useState('')

    const sendSearchKey = function() {

        console.log("Search Key: ", genreId, media, language, year)

        if (search === null || search === '') {

            const input = document.querySelector('.search-bar').querySelector('input')

            input.focus()
        } else {
            const content = {
                "keyword": search,
                "genre": genreId,
                "media": media,
                "language": language,
                "year": year 
            }
            //  Call api
            const fetchingSearch = async () => {

                const [res, err] = await MovieApi('/search?userId=User 01&token=8qlOkxz4wq', "POST", content)

                // const [res, error] = await searchMovies(search)
                if ( res ) {

                    // console.log("Response: ", res.results)
                    if (res.results.length === 0) {
                        setResults(null)
                    } else {
                        setResults([...res.results])
                    }
                } else {
                    console.log("Error: ", err.data)
                }

                // setResults([...res])
            }
            fetchingSearch()
        }
    }

    const handleChangeGenre = (event) => {
        setGenreId(event.target.value);
    }

    const handleChangeMedia = (event) => {
        setMedia(event.target.value)
    }
    React.useEffect(() =>{
        // Get all genres
        const fetchingGenres = async () => {
            const [response] = await MovieApi('/genres?userId=User 01&token=8qlOkxz4wq', "GET")
            if ( response ) {
                // console.log(response)
                setGenres([...response])
            }
        }
        fetchingGenres()
    }, [])

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
            {/* Filter bar */}
            <div className='filter-bar'>
                {/* Genre */}
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-genre-label">Genre</InputLabel>
                    <Select
                        labelId="select-genre-label"
                        id="select-genre"
                        value={genreId}
                        label="Genre"
                        onChange={handleChangeGenre}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {
                        genres.map((value, index) => (
                            
                            <MenuItem key={index} value={value.id}>{value.name}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
                {/* Media Type */}
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-media-label">Media</InputLabel>
                    <Select
                        labelId="select-media-label"
                        id="select-media"
                        value={media}
                        label="Media"
                        onChange={handleChangeMedia}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {
                        listMedia.map((value, index) => (
                            
                            <MenuItem key={index} value={value.key}>{value.value}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
                {/* Languages */} 
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-language-label">Language</InputLabel>
                    <Select
                        labelId="select-language-label"
                        id="select-language"
                        value={language}
                        label="Language"
                        onChange={(event) => {
                            setLanguage(event.target.value)
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {
                        languages.map((value, index) => (
                            
                            <MenuItem key={index} value={value.key}>{value.value}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
                {/* Year */}
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-year-label">Year</InputLabel>
                    <Select
                        labelId="select-year-label"
                        id="select-year"
                        value={year}
                        label="Year"
                        onChange={(event) => {
                            setYear(event.target.value)
                        }}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value= "2019">2019</MenuItem>                    
                        <MenuItem value= "2020">2020</MenuItem>                    
                        <MenuItem value= "2021">2021</MenuItem>                    
                        <MenuItem value= "2022">2022</MenuItem>                    
                        <MenuItem value= "2023">2023</MenuItem>                    
                    </Select>
                </FormControl>
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
                    onClick={ sendSearchKey }
                >Search</button>
                
            </div>
        </div>
    );
};