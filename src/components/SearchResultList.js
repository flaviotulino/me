import React from 'react';
import SearchResultListItem from './SearchResultListItem';

const SearchResultList = ({results}) => (
    <ol>
        {
            results.map(result => {
                return (
                    <li key={result.sha}>
                        <SearchResultListItem result={result}/>
                    </li>
                )
            })
        }
    </ol>
);

export default SearchResultList;
