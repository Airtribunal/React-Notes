import { MdSearch } from 'react-icons/md';
import React from 'react';

const Search = ({handleSearchNote}) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(e) => handleSearchNote(e.target.value.toLowerCase())}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;