import { takeLatest, put, all, call , take, takeEvery} from "redux-saga/effects";
import RecipeActionTypes from "./recipe.types";
import { getCategoryList, getCategoryListSuccess } from "./recipe.actions";
import axios from "axios";
import { BASE_URI } from "../../Api/api";

const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URI}/category/all/categories`);

  console.log({ res });
  return res?.data?.data;
};

// const postRecipeApi = async (formData) => {
//   console.log({ formData });
//   const res = await axios.post(`${BASE_URI}/recipe`, formData);
//   console.log(res);
//   return res;
// };

export function* categoriesList() {
  try {
    const categories = yield call(fetchCategories);
    yield put(getCategoryListSuccess(categories));
  } catch (err) {
    console.log(err);
  }
}

// export function* postRecipeData() {
  
//   const {payload} = take(RecipeActionTypes.ADD_RECIPE)
//   try {
//     const result = yield call(postRecipeApi, payload);
//     console.log(result)
//   } catch (err) {
//     console.log(err);
//   }
// }

// export function* sendRecipeData() {

//   yield takeLatest(RecipeActionTypes.ADD_RECIPE,postRecipeData);
 
// }

export function* categoryList() {
  yield takeLatest(RecipeActionTypes.GET_CATEGORIES_LIST, categoriesList);
}

export function* recipeSagas() {
  yield all([call(categoryList)]);
}
