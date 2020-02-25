import { 
  FETCH_REQUESTED, 
  SEARCH_RESULTS, 
  NESTED_SEARCH_TYPE, 
  NESTED_RESULTS, 
  RESET_PAGE,
  CHANGE_SEARCH_TYPE,  
  CHANGE_PAGE,
  NEW_PAGE_RESULTS } from './action_types';


export default function (state = {page:1}, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        page: 1,
        totalPages: 1,
        searching: true,
        searched: false,
        searchType: action.searchType,
        searchURL: action.URL
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
    case NESTED_SEARCH_TYPE:
      return {
        ...state,
        nestedType: action.newType,
        resultType: action.resultType,
        searching: true,
        searched: false,
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
      case CHANGE_SEARCH_TYPE:
        return {
          ...state,
          searchType: action.searchType,
          results: [],
          nestedResults: []
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
      case CHANGE_PAGE:
        return {
          ...state,
          page: action.page,
          searching: true,
          searched: false,
          searchURL: action.URL
        }
      case NEW_PAGE_RESULTS:
        return {
          ...state,
          results: action.payload,
          searching: false,
          searched: true
        }
    default:
      return { ...state }
  }
}