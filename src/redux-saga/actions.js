import { FETCH_REQUESTED, NESTED_SEARCH_TYPE, CHANGE_SEARCH_TYPE, RESET_PAGE } from './action_types';
import { character, episode, location } from './request_types';

export const resetState = () => {
    return ({type: RESET_PAGE})
}

export const onSearch = (searchType, page, searchTerm, filters = {}) => {
    var URL = filters === {} ?
        `https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`
        : generateURL(`https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`, filters)


    return ({
        type: FETCH_REQUESTED,
        URL,
        searchType
    })
}

const generateURL = (baseURL, filters) => {
    var URL = baseURL;
    for (var filter in filters) {
        if (filters[filter] !== "") {
            URL += (`&${filter}=${filters[filter]}`)
        }
    }
    return URL
}


export const changeSearchType = searchType => {
    return {
        type: CHANGE_SEARCH_TYPE,
        searchType
    }
}

export const nestedSearch = (searchType, searchList, title) => {
    switch (searchType) {
        case character:
            return {
                type: NESTED_SEARCH_TYPE,
                newType: episode,
                resultType: "Episodes",
                title,
                searchList
            }
        case episode:
            return {
                type: NESTED_SEARCH_TYPE,
                newType: character,
                resultType: "Characters",
                title,
                searchList
            }
        case location:
            return {
                type: NESTED_SEARCH_TYPE,
                newType: character,
                resultType: "Residents",
                title,
                searchList
            }

        default:
            return {
                type: NESTED_SEARCH_TYPE,
                newType: "null",
                resultType: "null",
                title,
                searchList
            }
    }

}