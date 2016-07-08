//This shows up on every page
var React = require('react');

var Base = React.createClass({
	render: function() {
		
		return (
			<div>
				<h1> Header </h1>
					{this.props.children}
				<h2> Footer </h2>
			</div>

		);
	}
});

module.exports = Base;
