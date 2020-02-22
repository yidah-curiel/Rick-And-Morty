import React from "react";
import SearchOutput from '../components/SearchOutput';


class Results extends React.Component {

    state = {
        results: [],
        searched: false
    };


    firstCharacterRef = React.createRef()

    componentDidMount() {
        const { list } = this.props.match.params
        const { searchType } = this.props.location.state
        console.log(list, searchType)


        fetch(`https://rickandmortyapi.com/api/${searchType}/${list}`)
            .then(res => res.json())
            .then(data =>
                this.setState({ results: data, searched: true }))
            .then(() => this.firstCharacterRef.current.focus())
            .catch(() => this.setState({
                results: [],
                searched: true
            }));


        console.log(this.state)
    }




    render() {
        const { searchType, resultType } = this.props.location.state
        console.log(this.props.location.state)
        console.log(this.props.match.params.list)
        return (
            <React.Fragment>
                <header>
                    {this.props.location ?
                        <h1 className="heading">{this.props.location.state.title} <span>{`${resultType}s`}</span></h1>
                        : <h1 className="heading">Rick <span>And</span> Morty</h1>
                    }
                </header>
                <main>
                    {this.state.searched ? <SearchOutput searchType={searchType} results={this.state.results} firstCharacterRef={this.firstCharacterRef} /> : <div className="search-loader" />}
                </main>
            </React.Fragment>
        );
    }
}



export default Results