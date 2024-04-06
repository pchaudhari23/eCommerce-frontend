import { takeEvery, takeLeading, takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';

export default function* rootSaga() {
  yield all([
    // takeLeading(types.LOGIN, doLoginUserSaga),
    // takeLeading(types.REGISTER, doRegisterUserSaga),
    // takeLeading(types.IC_ONBOARD, doSendICOnboardInvite),
    // takeLatest(types.VERIFY_IC_EMAIL, doVerifyICEmail),
    // takeEvery(types.GET_INSTITUTES, doGetAllInstitutes),
    // takeEvery(types.GET_INSTITUTES_WITH_STATS, doGetAllInstitutesWithStats),
  ]);
}
