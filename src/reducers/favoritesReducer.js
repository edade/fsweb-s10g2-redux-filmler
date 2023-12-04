import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions.js';
import movies from '../data.js'

const initialState = {
  favorites: [movies[0]],
  displayFavorites: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_FAVORITES:
        return { ...state, displayFavorites: !state.displayFavorites };
      case ADD_FAVORITE:
        const doesExist = state.favorites.find(
          (item) => item.id === action.payload.id
        );
        if (doesExist) {
          return state;
        } else {
          return { ...state, favorites: [...state.favorites, action.payload] };
        }
      case REMOVE_FAVORITE:
        const newState = {
          ...state,
          favorites: state.favorites.filter((item) => action.payload !== item.id),
        };
        return newState;
      default:
        return state;
    }
  };
  export default reducer;