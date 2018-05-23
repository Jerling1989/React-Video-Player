// IMPORT REACT
import React from 'react';

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-sm-4 col-4">
					<img className="img-fluid" src="../../icons/react.png" />
				</div>
				<div className="col-sm-4 col-4">
					<img className="img-fluid" src="../../icons/youtube.png" />
				</div>
				<div className="col-sm-4 col-4">
					<img className="img-fluid" src="../../icons/node.png" />
				</div>
			</div>
		</div>
	);
};

// EXPORT COMPONENT
export default Jumbotron;