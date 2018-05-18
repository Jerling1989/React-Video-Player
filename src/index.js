import React from 'react';
import ReactDOM from 'react-dom';

// CREATE A NEW COMPONENT
// THIS COMPONENT SHOULD PRODUCE SOME HTML
const App = function () {
	return <div>Hi!</div>;
};

// TAKE THIS COMPONENTS GENERATED HTML AND PUT IN THE DOM
ReactDOM.render(App);