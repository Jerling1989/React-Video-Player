// IMPORT REACT
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// IMPORT COMPONENTS
import SearchBar from './components/search_bar';
// YOUTUBE API KEY
const API_KEY = 'AIzaSyA6KRgUyCWq_OBNmoE3SikZ9R62hp250aA';

// CREATE MAIN APP CLASS COMPONENT
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));
	}

	render () {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// TAKE THIS COMPONENTS GENERATED HTML AND PUT IN THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));