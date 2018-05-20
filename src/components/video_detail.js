// IMPORT REACT
import React from 'react';

// CREATE VIDEODETAIL FUNCTIONAL COMPONENT WITH PROPS.VIDEO ARGUMENT FROM MAIN APP COMPONENT
const VideoDetail = ({video}) => {

	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

// EXPORT VIDEODETAIL COMPONENT
export default VideoDetail;