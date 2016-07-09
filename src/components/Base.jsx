//This shows up on every page
var React = require('react');

var Base = React.createClass({
	render: function() {

		var divStyle = {
			marginTop: 10,
			color: 'white',
			// backgroundColor: '#004080',
			padding: 20,
			textAlign: 'center'
		};

		var iconStyle = {
			fontSize: 30,
			padding: 10
		};

		var aStyle = {
			fontSize: 20,
			color: 'white'
		}


		return (
			<div style={divStyle} >
				<div className="row" height="200">
					<div className="col-md-3 col-md-offset-1">
						<h1> Country News </h1>
							<h4>Top Stories in my Country</h4>
					</div>
					<div className="col-md-3 col-md-offset-4 pull-right">
						<i style={iconStyle} className="ion-social-facebook-outline"></i>
						<i style={iconStyle} className="ion-social-github-outline"></i>
						<i style={iconStyle} className="ion-social-twitter-outline"></i>
						<i style={iconStyle} className="ion-social-linkedin-outline"></i>
						<i style={iconStyle} className="ion-ios-email-outline"></i>		
					</div>

				</div>
				<div className="row">
					<div className="col-md-2 col-md-offset-8 col-sm-4 col-sm-offset-8">
						
							<a style={aStyle} href="#/news">NEWS</a>
						
							<a style={aStyle} href="#/photos" className="pull-right">PHOTOS</a>
						</div>
					</div>							
				
				<div className="container">
					{this.props.children}
				</div>
			</div>

		);
	}
});

module.exports = Base;
