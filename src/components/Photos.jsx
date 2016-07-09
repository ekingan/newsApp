var React = require('react');

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [
				'../assets/IMG_0923.JPG',
				'../assets/IMG_0925.JPG',
				'../assets/IMG_0950.JPG',
				'../assets/IMG_0964.JPG',
				'../assets/IMG_1042.JPG',
				'http://i.imgur.com/nIj9GEE.jpg',
				'http://i.imgur.com/dqRILeB.png',
				'http://i.imgur.com/cSqe4s3.jpg'
			]
		};
	}

	render() {
		var photos = this.state.photos.map(function(photo, key) {
			let imgStyle ={
				boxShadow: '1px 1px 5px',
				margin: 10
			};

			return(
					<a href={photo}>
					<img key={key} src={photo} style={imgStyle} 
								width="240" height="240"
					/>
				</a>

				);
		});

		return(
				<div className="row panel">
					{photos}
				</div>
		);
	}
}

module.exports = Photos;