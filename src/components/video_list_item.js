// IMPORT REACT
import React from 'react';

// CREATE VIDEOLISTITEM FUNCTIONAL COMPONENT WITH PROPS.VIDEO 
// AND PROPS.ONVIDEOSELECT ARGUMENTS FROM VIDEOLIST COMPONENT
const VideoListItem = ({video, onVideoSelect}) => {
	// CREATE CONST FOR VIDEO THUMBNAIL URL
	const imageUrl = video.snippet.thumbnails.default.url;
	// STRUCTURE COMPONENT
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						<small>{video.snippet.title}</small>
					</div>
				</div>
			</div>
		</li>
	); 
};

// EXPORT COMPONENT
export default VideoListItem;