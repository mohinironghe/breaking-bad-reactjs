import { User } from "../interfaces/User";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const addFavorite = (data:User) => ({
    type:ADD_FAVORITE,
    payload:data
});
export const removeFavorite = (data:User) =>({
    type:REMOVE_FAVORITE,
    payload:data
})
export const updateSearch = (data:string) => ({
    type:UPDATE_SEARCH,
    payload:data
});


