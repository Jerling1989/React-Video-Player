// IMPORT REACT
import React, { Component } from 'react';

// CREATE SEARCHBAR CLASS COMPONENT
class SearchBar extends Component {
	// INITIALIZE STATE
	constructor(props) {
		super(props);
		// SET STATE
		this.state = { term: ''};
	}

	// RENDER COMPONENT METHOD
	render() {
		// RETURN INPUT WITH EVENT HANDLER ARROW FUNCTION TO SET STATE
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}

}

// EXPORT COMPONENT
export default SearchBar;