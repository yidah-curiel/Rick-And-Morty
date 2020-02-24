export const onSearch = (searchType, page, searchTerm, filters={}) =>{
    var URL = filters === {} ? 
            `https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`
            : generateURL(`https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`, filters)

    var filter = filters === {} ? false : true

    return ({
        type: 'FETCH_REQUESTED',
        URL,
        filter
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