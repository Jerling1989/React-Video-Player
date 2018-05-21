// IMPORT REACT
import React from 'react';
// IMPORT COMPONENT
import VideoListItem from './video_list_item';

// CREATE VIDEOLIST FUNCTIONAL COMPONENT WITH PROPS PASSED AS ARGUMENT
const VideoList = (props) => {
	// CREATE VIDEOITEMS ARRAY BY MAPPING THE VIDEOS PROP
	// CREATE VIDEOLISTITEM COMPONENT FOR EACH ITERATION
	// PASS VIDEO AND ONVIDEOSELECT PROPS
	const videoItems = props.videos.map((video) => {
		// STRUCTURE COMPONENT
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

// EXPORT COMPONENT
export default VideoList;