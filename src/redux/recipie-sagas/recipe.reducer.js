import RecipeActionTypes from "./recipe.types";

const INITIAL_STATE = {
  categoriesList: [],
  error:null
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case RecipeActionTypes.GET_CATEGORIES_LIST_SUCCESS:
      return {
        categoriesList: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default recipeReducer;
