// IMPORT REACT
import React, { Component } from 'react';

// CREATE SEARCHBAR CLASS COMPONENT
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// SET STATE
		this.state = { term: '' };
	}
	// RENDER COMPONENT METHOD
	render() {
		// STRUCTURE COMPONENT
		return (
			<div className="search-bar">
				{/* RETURN INPUT WITH EVENT HANDLER ARROW FUNCTION TO SET STATE */}
				<input 
				value = {this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}
	// CREATE ONINPUTCHANGE METHOD
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// EXPORT COMPONENT
export default SearchBar;