import { SEARCH_RESULTS, FETCH_FAILED, FETCH_REQUESTED } from './action_types';
import { all, call, put, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function* fetchResults(URL) {
  delay(800)
  try {
    const request = yield fetch(URL)
      .then(res => res.json())
    yield put({ type: SEARCH_RESULTS, payload:request.results, totalPages:request.info.pages })
  } catch (error) {
    yield put({ type: FETCH_FAILED, payload:error })
  }
}

function* watchFetchData() {
  //we want to only get the response of the latest request fired 
  yield takeLatest(FETCH_REQUESTED, (request)=>fetchResults(request.URL))

}

export default function* rootSaga() {
  yield all([
    call(watchFetchData)
  ])
}