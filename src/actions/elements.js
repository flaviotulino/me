export const SET_SEARCH_BAR_AUTOFOCUS = 'SET_SEARCH_BAR_AUTO_FOCUS';

export const setSearchBarAutofocus = (autoFocus = true) => ({
    type: SET_SEARCH_BAR_AUTOFOCUS,
    searchBarAutoFocus: autoFocus
});
