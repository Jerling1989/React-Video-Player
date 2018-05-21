// IMPORT REACT
import React from 'react';
// IMPORT COMPONENT
import VideoListItem from './video_list_item';

// CREATE VIDEOLIST FUNCTIONAL COMPONENT WITH PROPS PASSED AS ARGUMENT
const VideoList = (props) => {
	// CREATE VIDEOITEMS ARRAY BY MAPPING THE VIDEOS PROP
	const videoItems = props.videos.map((video) => {
		console.log(video);
		// CREATE VIDEOLISTITEM COMPONENT FOR EACH ITERATION
		return (
			// PASS VIDEO AND ONVIDEOSELECT PROPS
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={video} />
		);
	});
	// STRUCTURE COMPONENT
	return (
		<ul className="col-lg-4 list-group">
			{videoItems}
		</ul>
	);
};

// EXPORT COMPONENT
export default VideoList;