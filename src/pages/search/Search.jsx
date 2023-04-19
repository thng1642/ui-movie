import React from 'react';
import NavBar from "../../components/navigation/NarBar";
import SearchBox from '../../components/search/SearchBox';
import { ResultProvider } from '../../context/ResultContext';
import { ListResult } from '../../features/search/ListResult';

export default function Search () {
	return (
		<div className='app'>
			<NavBar />
			<ResultProvider>

				<SearchBox />

				<h3 className='mb-24 ml-32 white-text'>Search Result</h3>
				<ListResult />

			</ResultProvider>
		</div>
	);
};

