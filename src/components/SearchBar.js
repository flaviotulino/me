import React from 'react';

const SearchBar = ({query, onChange, onSubmit, searchBarAutoFocus}) => (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
    }}>
        <div className="field has-addons">
            {console.log(searchBarAutoFocus)}
            <div className="control">
                <input className="input"
                       type="text"
                       autoFocus={searchBarAutoFocus}
                       placeholder="Text input"
                       onChange={(e) => onChange(e.target.value)}
                       value={query}/>
            </div>
            <div className="control">
                <button className="button is-primary" type="submit">Search</button>
            </div>
        </div>
    </form>
);

export default SearchBar;
