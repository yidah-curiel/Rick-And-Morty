import { FETCH_REQUESTED, SEARCH_RESULTS, FETCH_FAILED, CHANGE_SEARCH_TYPE} from './action_types';

const initialState = {
  page: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        page: 1,
        searching: true
      }
    case SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
        searching: false,
        searched: true,
        totalPages: action.totalPages,
        page: 1,
      }
    case FETCH_FAILED:
      return {
        ...state,
        results: [],
        searching: false,
        searched: true,
        totalPages: 1,
        page: 1,
      }
    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.searchType
      }
    
    default:
      return {...state}
  }
}