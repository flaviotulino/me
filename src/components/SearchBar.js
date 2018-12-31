import React from 'react';
import PropTypes from 'prop-types';

let ref = null;

const SearchBar = ({
  query, onChange, onSubmit, autoFocus,
}) => (
  <form onSubmit={e => onSubmit(e)}>
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          ref={(input) => { ref = input; }}
          placeholder="Text input"
          onChange={e => onChange(e.target.value)}
          value={query}
        />
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

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default SearchBar;
