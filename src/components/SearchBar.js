import React from 'react';

let ref = null;

const SearchBar = ({query, onChange, onSubmit, autoFocus}) => (
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="field has-addons">
            <div className="control">
                <input className="input"
                       type="text"
                       autoFocus={autoFocus}
                       ref={input => ref = input}
                       placeholder="Text input"
                       onChange={(e) => onChange(e.target.value)}
                       value={query}/>
            </div>
            <div className="control">
                <button className="button is-primary" type="submit">Search</button>
            </div>
        </div>

        {
            autoFocus && ref.focus()
        }
    </form>
);

export default SearchBar;
