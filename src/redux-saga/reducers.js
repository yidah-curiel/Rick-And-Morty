import { FETCH_REQUESTED, SEARCH_RESULTS, CHANGE_SEARCH_TYPE, NESTED_SEARCH_TYPE, NESTED_RESULTS, RESET_PAGE } from './action_types';


export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        page: 1,
        totalPages: 1,
        searching: true,
        searched: false,
        searchType: action.searchType
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
    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.searchType
      }
    case RESET_PAGE:
      return {
        ...state,
        page: 1,
        totalPages: 1,
        searching: false,
        searched: false,
        results: [],
        nestedResults: []
      }
    case NESTED_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.newType,
        resultType: action.resultType,
        searching: true,
        searched: false,
        results: [],
        nestedResults: [],
        totalPages: 1,
        page: 1,
        title: action.title
      }
    case NESTED_RESULTS:
      return {
        ...state,
        nestedResults: action.payload,
        searching: false,
        searched: true
      }
    default:
      return { ...state }
  }
}