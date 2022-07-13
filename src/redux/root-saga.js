import { all, call } from "redux-saga/effects";
import { membersSagas } from "./members-list/member.sagas";
import { recipeSagas } from "./recipie-sagas/recipe.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(membersSagas), call(recipeSagas)]);
}
