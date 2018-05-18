// IMPORT REACT
import React from 'react';
import ReactDOM from 'react-dom';
// IMPORT COMPONENTS
import SearchBar from './components/search_bar';
// YOUTUBE API KEY
const API_KEY = 'AIzaSyA6KRgUyCWq_OBNmoE3SikZ9R62hp250aA';

// CREATE A NEW COMPONENT
// THIS COMPONENT SHOULD PRODUCE SOME HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
};

// TAKE THIS COMPONENTS GENERATED HTML AND PUT IN THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));