var React = require('react');
var ReactDOM = require('react-dom');

/*
	StorePicker
	This will let us make StorePicker
*/

var StorePicker = React.createClass({

	render : function() {
		var name = 'greg';
		return (
			<form className="store-selector">
		{/* How to write a comment in JSX */}
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" required />
				<input type="Submit" />
			</form>
		)
	}
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));