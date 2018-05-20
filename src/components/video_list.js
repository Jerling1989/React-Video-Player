// IMPORT REACT
import React from 'react';
// IMPORT COMPONENT
import VideoListItem from './video_list_item';

// CREATE VIDEOLIST FUNCTIONAL COMPONENT WITH PROPS PASSED AS ARGUMENT
const VideoList = (props) => {
	// CREATE VIDEOITEMS ARRAY BY MAPPING THE VIDEOS PROP
	const videoItems = props.videos.map(video => <VideoListItem video={video} />);

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

// EXPORT COMPONENT
export default VideoList;