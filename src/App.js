import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';

class RickAndMorty extends React.Component {

  state = {
      page: 1,
      totalPages: 1,
      searchTerm: '',
      searching: false,
      searched: false,
      results: [],
      searchType: "character"
  };


  firstCharacterRef = React.createRef();

  handleSearchInput = debounce(searchTerm => this.setState({ page: 1, searchTerm, searching: true }, this.fetchResults(this.state.searchType)));

  fetchResults = (searchType) => {
      fetch(`https://rickandmortyapi.com/api/${searchType}/?page=${this.state.page}&name=${this.state.searchTerm}`)
          .then(res => res.json())
          .then(data => this.setState({
              totalPages: data.info.pages,
              characters: data.results,
              searching: false,
              searched: true
          }))
          .then(() => this.firstCharacterRef.current.focus())
          .catch(() => this.setState({
              page: 1,
              totalPages: 1,
              characters: [],
              searching: false,
              searched: true
          }));
  }

  changePage = e => {
      Array.from(e.target.classList).includes('page-btn-next') ?
          this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchResults(this.state.searchType)) :
          this.setState(prevState => ({ page: prevState.page - 1 }), this.fetchResults(this.state.searchType));
  }

  handleTypeChange = e => {this.state.searchType === "episode" ? this.setState({ searchType: "character" }) : this.setState({ searchType: "episode" })}

  render() {
      return (
          <React.Fragment>
              <header>
                  <h1 className="heading">Rick <span>And</span> Morty</h1>
              </header>
              <main>
                  <SearchInput handleSearchInput={ e => this.handleSearchInput(e.target.value.replace(" ", "+")) } searchType = {this.state.searchType} handleTypeChange={this.handleTypeChange}/>
                  { this.state.searching ? <div className="search-loader" /> : null }
                  { this.state.searched && !this.state.searching ? <SearchOutput characters={ this.state.characters } firstCharacterRef={ this.firstCharacterRef } /> : null }
                  { this.state.totalPages > 1 && !this.state.searching ? <PageNavigation page={ this.state.page } totalPages={ this.state.totalPages } changePage={ this.changePage } /> : null }
              </main>
          </React.Fragment>
      );
  }
}


function SearchOutput({ searchType, characters, firstCharacterRef }) {
  return (
      <div className="search-output">
          { searchType === "character" ?
              characters.length > 0 ?
                  characters.map((character, index) => <Character character={ character } key={ character.id } index={ index } firstCharacterRef={ firstCharacterRef } />) :
                  <p className="no-results">No Results Found</p>
            : <div>episode output</div>
          }
      </div>
  );
}

function Character({ character, firstCharacterRef, index }) {
  return (
      <details className="character-details" >

          <summary className="character-summary" ref={ index === 0 ? firstCharacterRef : null }>{ character.name }</summary>

          <div className="character-container">

              <div className="character-info">

                  <details className="character-info-item" open>
                      <summary className="character-info-item-summary">Name</summary>
                      <p className="character-info-item-data">{ character.name }</p>
                  </details>

                  <details className="character-info-item" open>
                      <summary className="character-info-item-summary">Species</summary>
                      <p className="character-info-item-data">{ character.species }</p>
                  </details>

                  <details className="character-info-item" open>
                      <summary className="character-info-item-summary">Gender</summary>
                      <p className="character-info-item-data">{ character.gender }</p>
                  </details>

                  <details className="character-info-item" open>
                      <summary className="character-info-item-summary">Location</summary>
                      <p className="character-info-item-data">{ character.location.name }</p>
                  </details>

              </div>

              <div className="character-image-container">
                  <img className="character-image" src={ character.image } alt={ character.name } />
              </div>

          </div>

      </details>
  );
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

export default RickAndMorty;
