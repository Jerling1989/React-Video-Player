// IMPORT REACT
import React, { Component } from 'react';

// CREATE SEARCHBAR CLASS COMPONENT
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// SET STATE
		this.state = { term: ''};
	}
	// RENDER COMPONENT METHOD
	render() {
		return (
			<div className="search-bar">
				{/* RETURN INPUT WITH EVENT HANDLER ARROW FUNCTION TO SET STATE */}
				<input 
				value = {this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

// EXPORT COMPONENT
export default SearchBar;