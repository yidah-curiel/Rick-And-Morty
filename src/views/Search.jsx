import React from "react";
import SearchInput from '../components/SearchInput';
import SearchOutput from '../components/SearchOutput';
import PageNavigation from '../utils/PageNavigation';
import { connect } from "react-redux";
import { onSearch } from '../redux-saga/actions';

class Search extends React.Component {

    state = {
        searchTerm: '',
        filters: {
        }
    };


    handleSearchInput = searchTerm => {
        const { page } = this.props
        const { searchType } = this.props.match.params
        this.setState({ searchTerm });
        this.props.onSearch(searchType, page, searchTerm, this.state.filters)
    }

    handleSearchFilter = (e) => {
        const { name, value } = e.target
        const { page } = this.props
        const { searchType } = this.props.match.params
        const { filters, searchTerm } = this.state
        let newFilters = { ...filters };
        newFilters[name] = value
        this.setState({
            filters: newFilters
        })
        this.props.onSearch(searchType, page, searchTerm, newFilters)
    }


    changePage = e => {
        const { searchType } = this.props.match.params;
        Array.from(e.target.classList).includes('page-btn-next') ?
            this.setState(prevState => ({ page: prevState.page + 1 }), this.showResults(searchType, this.state.filters)) :
            this.setState(prevState => ({ page: prevState.page - 1 }), this.showResults(searchType, this.state.filters));
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
                    {this.props.searching ? <div className="search-loader" /> : null}
                    {this.props.searched && !this.props.searching ?
                        <SearchOutput
                            searchType={searchType}
                            results={this.props.results}
                            firstCharacterRef={this.firstCharacterRef}
                        />
                        : null
                    }
                    {this.props.totalPages > 1 && !this.props.searching ?
                        <PageNavigation
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                            changePage={this.changePage}
                        />
                        : null
                    }
                </main>
            </React.Fragment>
        );
    }
}



const mapStateToProps = state => {
    return {
        results: state.results,
        searching: state.searching,
        searched: state.searched,
        totalPages: state.totalPages,
        page: state.page
    };
};


const mapDispachToProps = dispatch => {
    return {
        onSearch: (searchType, page, searchTerm, filters) => dispatch(onSearch(searchType, page, searchTerm, filters))
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Search);
