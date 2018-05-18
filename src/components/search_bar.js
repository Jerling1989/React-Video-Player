// IMPORT REACT
import React, { Component } from 'react';

// CREATE SEARCHBAR CLASS COMPONENT
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	// RENDER COMPONENT METHOD
	render() {
		// RETURN INPUT WITH EVENT HANDLER ARROW FUNCTION
		return <input onChange={event => console.log(event.target.value)} />;
	}

}

// EXPORT COMPONENT
export default SearchBar;