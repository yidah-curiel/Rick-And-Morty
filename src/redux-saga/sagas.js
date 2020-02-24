import { SEARCH_RESULTS, NESTED_RESULTS, FETCH_REQUESTED, NESTED_SEARCH_TYPE } from './action_types';
import { all, call, put, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* fetchResults(URL, searchType) {
  delay(800)
  try {
    const request = yield fetch(URL)
      .then(res => res.json())
     
    yield put({ type: SEARCH_RESULTS, payload:request.results, totalPages:request.info.pages })
  } catch {
    yield put({ type: SEARCH_RESULTS, payload:[], totalPages:1 })
  }
}

function* watchFetchData() {
  //we want to only get the response of the latest request fired 
  yield takeLatest(FETCH_REQUESTED, (request)=>fetchResults(request.URL, request.searchType))

}

export function* fetchNestedResults(searchType, list) {
  try {
    const request = yield  fetch(`https://rickandmortyapi.com/api/${searchType}/${list}`)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data)) return data
              return [data]
            })
    yield put({ type: NESTED_RESULTS, payload:request})
  } catch {
    yield put({ type: NESTED_RESULTS, payload:[] })
  }
}


function* watchNestedFetches() {
  yield takeLatest(NESTED_SEARCH_TYPE, (request)=>fetchNestedResults(request.newType,request.searchList))
}

export default function* rootSaga() {
  yield all([
    call(watchFetchData),
    call(watchNestedFetches)
  ])
}