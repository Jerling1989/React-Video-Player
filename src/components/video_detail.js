// IMPORT REACT
import React from 'react';

// CREATE VIDEODETAIL FUNCTIONAL COMPONENT WITH PROPS.VIDEO ARGUMENT FROM MAIN APP COMPONENT
const VideoDetail = ({video}) => {
	// IF NO VIDEO IS READY SHOW LOADING MESSAGE
	if (!video) {
		return <div>Loading...</div>;
	}
	// CREATE VIDEOID CONST FROM VIDEO PROP
	const videoId = video.id.videoId;
	// INSERT VIDEO ID INTO YOUTUBE EMBED URL
	const url = `https://www.youtube.com/embed/${videoId}`;
	// STRUCTURE COMPONENT
	return (
		<div className="video-detail col-lg-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><h3>{video.snippet.title}</h3></div>
				<div>From: {video.snippet.channelTitle}<br /><br /></div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

// EXPORT VIDEODETAIL COMPONENT
export default VideoDetail;