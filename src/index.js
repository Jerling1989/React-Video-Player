// IMPORT REACT
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// IMPORT COMPONENTS
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// YOUTUBE API KEY
const API_KEY = 'AIzaSyA6KRgUyCWq_OBNmoE3SikZ9R62hp250aA';

// CREATE MAIN APP CLASS COMPONENT
class App extends Component {
	constructor(props) {
		super(props);
		// SET STATE
		this.state = { videos: [] };
		// USE RETURN DATA FROM YOUTUBE SEARCH TO UPDATE COMPONENT STATE
		YTSearch({key: API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));
	}
	// RENDER COMPONENT METHOD
	render () {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				{/* PASS VIDEOS PROP TO VIDEOLIST */}
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// TAKE THIS COMPONENTS GENERATED HTML AND PUT IN THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));