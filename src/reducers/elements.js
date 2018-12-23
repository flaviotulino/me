import { SET_SEARCH_BAR_AUTOFOCUS } from '../actions/elements';

const elements = (state = {}, action) => {
    switch (action.type) {
        case SET_SEARCH_BAR_AUTOFOCUS:
            const {searchBarAutoFocus} = action;

            return {
                ...state,
                searchBarAutoFocus
            };
        default:
            return state;
    }
};

export default elements;
