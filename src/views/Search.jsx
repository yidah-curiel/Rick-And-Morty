import React from "react";
import SearchInput from '../components/SearchInput';
import SearchOutput from '../components/SearchOutput';
import PageNavigation from '../utils/PageNavigation';

class Search extends React.Component {

    state = {
        page: 1,
        totalPages: 1,
        searchTerm: '',
        searching: false,
        searched: false,
        results: [],
        checked: false,
        filters: {
            "gender": "",
            "species": "",
            "status": "",
            "type": "",
            "dimension": "",
            "episode": ""
        }
    };


    firstCharacterRef = React.createRef();

    handleSearchInput = debounce(searchTerm => this.setState({ page: 1, searchTerm, searching: true }, this.fetchResults(this.props.match.params.searchType)));

    handleSearchFilter = (e) => {
        const { name, value } = e.target
        let newFilters = { ...this.state.filters };
        newFilters[name] = value
        console.log(newFilters)
        this.setState({
            page: 1,
            searching: true,
            filters: newFilters
        },
            debounce(() => this.fetchResults(this.props.match.params.searchType, this.state.filters)))
    }

    generateURL = (searchType, filters) => {
        const { page, searchTerm } = this.state
        var baseURL = `https://rickandmortyapi.com/api/${searchType}/?page=${page}&name=${searchTerm}`;
        if (!filters) return baseURL;
        for (var filter in filters) {
            if (filters[filter] !== "") {
                baseURL += (`&${filter}=${filters[filter]}`)
            }
        }
        console.log(baseURL)
        return baseURL
    }

    fetchResults = (searchType, filters) => {
        let URL = this.generateURL(searchType, filters);
        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then(data => this.setState({
                totalPages: data.info.pages,
                results: data.results,
                searching: false,
                searched: true
            }))
            .then(() => this.firstCharacterRef.current.focus())
            .catch(() => this.setState({
                page: 1,
                totalPages: 1,
                results: [],
                searching: false,
                searched: true
            }));
    }

    changePage = e => {
        const { searchType } = this.props.match.params;
        Array.from(e.target.classList).includes('page-btn-next') ?
            this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchResults(searchType)) :
            this.setState(prevState => ({ page: prevState.page - 1 }), this.fetchResults(searchType));
    }

    render() {
        const { searchType } = this.props.match.params
        return (
            <React.Fragment>
                <main>
                    <SearchInput
                        handleSearchInput={e => this.handleSearchInput(e.target.value.replace(" ", "+"))}
                        searchType={searchType}
                        handleSearchFilter={this.handleSearchFilter}
                    />
                    {this.state.searching ? <div className="search-loader" /> : null}
                    {this.state.searched && !this.state.searching ?
                        <SearchOutput
                            searchType={searchType}
                            results={this.state.results}
                            firstCharacterRef={this.firstCharacterRef}
                        />
                        : null
                    }
                    {this.state.totalPages > 1 && !this.state.searching ?
                        <PageNavigation
                            page={this.state.page}
                            totalPages={this.state.totalPages}
                            changePage={this.changePage}
                        />
                        : null
                    }
                </main>
            </React.Fragment>
        );
    }
}

function debounce(func, wait = 800) {

    let timeout;

    return function () {

        const context = this,
            args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            timeout = null;

            func.apply(context, args);

        }, wait);
    };
}



export default Search;
