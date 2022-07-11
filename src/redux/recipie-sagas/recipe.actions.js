import RecipeActionTypes from "./recipe.types";

export const getCategoryList = () => ({
    type: RecipeActionTypes.GET_CATEGORIES_LIST,

   
});

export const getCategoryListSuccess = (data) => ({
    type: RecipeActionTypes.GET_CATEGORIES_LIST_SUCCESS,
    payload:data
});

// export const getFamilyMembersSuccess = (data) => ({
//     type: MemberActionTypes.GET_MEMBER_LIST_SUCCESS,
//     payload:data,
// })


