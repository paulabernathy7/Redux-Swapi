import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getAPI } from "../actions";

// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  // passed and called api from actions
  componentDidMount() {
    this.props.getAPI();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return <h1>Star Wars Characters</h1>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error,
  characters: state.charsReducer.characters
});

export default connect(
  mapStateToProps,
  { getAPI }
)(CharacterListView);
