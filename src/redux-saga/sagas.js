import { SEARCH_RESULTS, NESTED_RESULTS, FETCH_REQUESTED, NESTED_SEARCH_TYPE, CHANGE_PAGE, NEW_PAGE_RESULTS } from './action_types';
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'

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
  const URL = `https://rickandmortyapi.com/api/${searchType}/${list}`
  try {
    const request = yield  fetch(URL)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data)) return data
              return [data]
            })
    yield put({ type: NESTED_RESULTS, payload:request, URL})
  } catch {
    yield put({ type: NESTED_RESULTS, payload:[], URL })
  }
}


function* watchNestedFetches() {
  yield takeLatest(NESTED_SEARCH_TYPE, (request)=>fetchNestedResults(request.newType,request.searchList))
}

export function* fetchNewPage(URL) {
  try {
    const request = yield  fetch(URL)
            .then(res => res.json())
            .then(data => data.results)
    yield put({ type: NEW_PAGE_RESULTS, payload:request, searchURL:URL})
  } catch {
    yield put({ type: NEW_PAGE_RESULTS, payload:[], searchURL:URL})
  }
}

function* watchPageChanges() {
  yield takeEvery(CHANGE_PAGE, (action)=>fetchNewPage(action.URL))
}

export default function* rootSaga() {
  yield all([
    call(watchFetchData),
    call(watchNestedFetches),
    call(watchPageChanges)
  ])
}