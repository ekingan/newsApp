var React = require('react');

class Article extends React.Component {
	render () {
		var divStyle = {
			color: '#003333',
			textAlign: "left"
		};

		var imgStyle = {
			height: 90,
			margin: 10
		};

		var panelStyle = {
			background: '#ffffff',
			margin: 20,
			padding: 20,
			boxShadow: '1px 1px 5px'
		};

		var images = this.props.images.map(function(image, key){
			return <img key={key} src={image} style={imgStyle} />
		});

		return (
			<div style={divStyle} className="container">
				<div className="row panel" style={panelStyle}>
					<div className="col-md-2 col-sm-2">
						<img src={this.props.imgIcon} height="75"
						/>
					</div>
					<div className="col-md-6 col-sm-9">
						<strong><h4>{this.props.title}</h4></strong>
						<h5>{this.props.subtitle}</h5>
						<p> {this.props.content} </p>
						 {images} 
						<h5> {this.props.location} </h5>
						
					
					</div>
				</div>
			</div>

			);
	}

}

module.exports = Article;