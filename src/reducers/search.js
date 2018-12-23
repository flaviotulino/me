import { SET_QUERY, SET_RESULTS } from '../actions/search';

const search = (state = {}, action) => {
    switch (action.type) {
        case SET_QUERY:
            const {query} = action;
            return {
                ...state,
                query
            };

        case SET_RESULTS:
            const {results} = action;
            return {
                ...state,
                results
            };

        default:
            return state;
    }
};

export default search;
