// IMPORT PACKAGES
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// IMPORT COMPONENTS
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Jumbotron from './components/header';
// YOUTUBE API KEY
const API_KEY = 'AIzaSyA6KRgUyCWq_OBNmoE3SikZ9R62hp250aA';

// CREATE MAIN APP CLASS COMPONENT
class App extends Component {
	constructor(props) {
		super(props);
		// SET STATE
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		// PRELOADED SEARCH PHRASE
		this.videoSearch('react js');
	}

	// CREATE VIDEOSEARCH METHOD
	videoSearch(term) {
		// USE RETURN DATA FROM YOUTUBE SEARCH TO UPDATE COMPONENT STATE
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	// RENDER COMPONENT METHOD
	render () {
		// CREATE VIDEOSEARCH FUNCTION WITH THROTTLED RESPONSE USING LODASH
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		// STRUCTURE COMPONENT
		return (
			<div>
				<Jumbotron />
				{/* PASS VIDEOSEARCH FUNCTION INTO ONSEARCHTERMCHANGE PROP */}
				<SearchBar onSearchTermChange={videoSearch} />
				{/* PASS SELECTEDVIDEO PROP TO VIDEODETAIL */}
				<VideoDetail video={this.state.selectedVideo} />
				{/* PASS VIDEOS AND ONVIDEOSELECT PROPS TO VIDEOLIST */}
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

// TAKE THIS COMPONENTS GENERATED HTML AND PUT IN THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));