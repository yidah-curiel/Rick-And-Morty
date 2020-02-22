import React from "react";
import Character from '../components/Character';

class Characters extends React.Component {

    state = {
        results: []
    };


    firstCharacterRef = React.createRef()

    componentDidMount() {
        const { list } = this.props.match.params


        fetch(`https://rickandmortyapi.com/api/character/${list}`)
            .then(res => res.json())
            .then(data => this.setState(() => ({ results: data })))
            .then(() => this.firstCharacterRef.current.focus())
            .catch(() => this.setState({
                results: []
            }));
    }




    render() {
        
        return (
            <React.Fragment>
                <header>
                    {this.props.location ?
                     <h1 className="heading">{this.props.location.state.title} <span> Characters</span></h1>
                     : <h1 className="heading">Rick <span>And</span> Morty</h1>
                    }
                </header>
                <main>
                    {this.state.results.length > 0 ?
                        this.state.results.map((character, index) => <Character character={character} key={character.id} index={index} firstCharacterRef={this.firstCharacterRef} />) :
                        <p className="no-results">No Results Found</p>
                    }
                </main>
            </React.Fragment>
        );
    }
}



export default Characters