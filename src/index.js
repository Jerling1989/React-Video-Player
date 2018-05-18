import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

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