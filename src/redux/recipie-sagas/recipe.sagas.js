import { takeLatest, put, all, call } from "redux-saga/effects";
import RecipeActionTypes from "./recipe.types";
import { getCategoryList, getCategoryListSuccess } from "./recipe.actions";
import axios from "axios";
import { BASE_URI } from "../../Api/api";

const fetchCategories = async () => {
  const res = await axios.get(
    `${BASE_URI}/category/all/categories`
  );

  console.log({res})
  return res?.data?.data
};
export function* categoriesList() {
  try {
    const categories = yield call(fetchCategories);
    yield put((getCategoryListSuccess(categories)));
  } catch (err) {
    console.log(err);
  }
}

export function* categoryList() {
  yield takeLatest(RecipeActionTypes.GET_CATEGORIES_LIST, categoriesList);
}


export function* recipeSagas() {
  yield all([call(categoryList)]);
}
