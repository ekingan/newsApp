var React = require('react');

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [
				'./assets/IMG_3253.JPG',
				'./assets/IMG_0925.JPG',
				'./assets/IMG_0950.JPG',
				'./assets/IMG_3246.JPG',
				'./assets/IMG_2559.jpg',
				'./assets/IMG_2159.jpg',
				'./assets/IMG_1251.JPG',
				'./assets/IMG_0968.JPG'
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