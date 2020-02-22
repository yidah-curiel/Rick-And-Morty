import React from "react";
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

class Home extends React.Component {

    state = {
        page: 1,
        totalPages: 1,
        searchTerm: '',
        searching: false,
        searched: false,
        results: [],
        searchType: "character",
        checked: false,
    };
  
  
    firstCharacterRef = React.createRef();
  
    handleSearchInput = debounce(searchTerm => this.setState({ page: 1, searchTerm, searching: true }, this.fetchResults(this.state.searchType)));
  
    fetchResults = (searchType) => {
        fetch(`https://rickandmortyapi.com/api/${searchType}/?page=${this.state.page}&name=${this.state.searchTerm}`)
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
        Array.from(e.target.classList).includes('page-btn-next') ?
            this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchResults(this.state.searchType)) :
            this.setState(prevState => ({ page: prevState.page - 1 }), this.fetchResults(this.state.searchType));
    }
  
    handleTypeChange = e => {
      var newSearch = this.state.searchType === "episode" ? "character" : "episode";
      if (!this.state.searched) { 
          this.setState({ searchType: newSearch, checked: !this.state.checked }) 
      } else if (this.state.searched && !this.state.searching){
              this.setState({  searchType: newSearch,
                               checked: !this.state.checked, 
                               page: 1, 
                               searching: true });
              this.fetchResults(newSearch)
      }
      console.log(this.state)
      }
  
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1 className="heading">Rick <span>And</span> Morty</h1>
                </header>
                <main>
                    <SearchInput handleSearchInput={ e => this.handleSearchInput(e.target.value.replace(" ", "+")) } searchType = {this.state.searchType} checked= {this.state.checked} handleTypeChange={this.handleTypeChange}/>
                    { this.state.searching ? <div className="search-loader" /> : null }
                    { this.state.searched && !this.state.searching ? <SearchOutput searchType = {this.state.searchType} results={ this.state.results } firstCharacterRef={ this.firstCharacterRef } /> : null }
                    { this.state.totalPages > 1 && !this.state.searching ? <PageNavigation page={ this.state.page } totalPages={ this.state.totalPages } changePage={ this.changePage } /> : null }
                </main>
            </React.Fragment>
        );
    }
  }
  
  
  
  
  
  function PageNavigation({ page, totalPages, changePage }) {
    return (
        <div className="page-navigation">
            { page > 1 ? <button className="page-btn page-btn-prev" onClick={ changePage }>Prev Page</button> : null }
            { page < totalPages ? <button className="page-btn page-btn-next" onClick={ changePage }>Next Page</button> : null }
        </div>
    );
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
  
  export default Home;
  