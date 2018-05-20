// IMPORT REACT
import React from 'react';

// CREATE VIDEOLISTITEM FUNCTIONAL COMPONENT WITH PROPS.VIDEO ARGUMENT
const VideoListItem = ({video}) => {
	// CREATE CONST FOR VIDEO THUMBNAIL URL
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	); 
};


// EXPORT COMPONENT
export default VideoListItem;