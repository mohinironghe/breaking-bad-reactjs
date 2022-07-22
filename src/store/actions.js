export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const addFavorite = data => ({
    type:ADD_FAVORITE,
    payload:data
});
export const removeFavorite = data =>({
    type:REMOVE_FAVORITE,
    payload:data
})
export const updateSearch = data => ({
    type:UPDATE_SEARCH,
    payload:data
});
