import * as actionTypes from './actions';
import {User} from '../interfaces/User';
import {InitialState} from '../interfaces/InitialState'
const initialState:InitialState = {
    search:'',
    favorites:[]

}
type ACTIONTYPE =
  | { type: "ADD_FAVORITE"; payload: User }
  | { type: "REMOVE_FAVORITE"; payload: User }
  | { type: "UPDATE_SEARCH"; payload: string } ;
const reducer = (state=initialState,action:ACTIONTYPE):InitialState=>{
    switch (action.type){
        case actionTypes.ADD_FAVORITE:
            return  {
                ...state,
                favorites:[
                    ...state.favorites,action.payload
                ]
            };
        case actionTypes.REMOVE_FAVORITE:
            
            let newFavorites = state.favorites.filter((favorite:User) => {
                return action.payload.char_id !== favorite.char_id;
              });

              return {
                ...state,
                favorites: newFavorites,
              };
        case actionTypes.UPDATE_SEARCH:
               return{
                   ...state,
                   search:action.payload
               }    
        default:
            return state;
    
    }
};
export default reducer;