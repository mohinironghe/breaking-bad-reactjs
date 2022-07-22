import * as actionTypes from './actions';

const initialState = {
    search:'',
    favorites:[]

}
const reducer = (state=initialState,action)=>{
    switch (action.type){
        case actionTypes.ADD_FAVORITE:
            action.payload.isFavorite = true;
            return  {
                ...state,
                favorites:[
                    ...state.favorites,action.payload
                ]
            };
        case actionTypes.REMOVE_FAVORITE:
            
            let newFavorites = state.favorites.filter((favorite) => {
                return action.payload !== favorite.char_id;
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