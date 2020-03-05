import { put, takeEvery } from 'redux-saga/effects';
// import getPostAction from '../actions';
import types from '../types';

function* sagaWorker() {
  yield console.log('SAGA WORKER CALLED');
  const res = 'msg:"worker called';
  yield put({ type: types.RECEIVED, res });
}

export default function* sagaWatcher() {
  yield takeEvery(types.GET, sagaWorker);
}
