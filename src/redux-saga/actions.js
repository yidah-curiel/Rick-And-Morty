import { 
    CHANGE_PAGE,
    FETCH_REQUESTED, 
    CHANGE_SEARCH_TYPE, 
    NESTED_SEARCH_TYPE, 
    RESET_PAGE } from './action_types';

import { character, episode, location } from './request_types';

export const resetState = () => {
    return ({type: RESET_PAGE})
}

export const changePage = (param, page, URL) => {
    const newPage = param === "next" ? page + 1 : page -1
    const newURL = newPageUrL(URL, newPage)
    return ({type: CHANGE_PAGE, page:newPage, URL:newURL})
}

export const onSearch = (searchType, page, searchTerm, filters = {}) => {
    var URL = filters === {} ?
        `https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`
        : generateURL(`https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`, filters)

    return ({
        type: FETCH_REQUESTED,
        URL,
        searchTerm,
        searchType,
    })
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

const generateURL = (baseURL, filters) => {
    var URL = baseURL;
    for (var filter in filters) {
        if (filters[filter] !== "") {
            URL += (`&${filter}=${filters[filter]}`)
        }
    }
    return URL
}

const newPageUrL = (URL, int) => {
    const urlArray = URL.split("page=");
    const n = urlArray[1].indexOf("&")
    urlArray[1] = urlArray[1].slice(n)
    return `${urlArray[0]}page=${int}${urlArray[1]}`
}