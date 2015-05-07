var jiraBox = React.createClass({displayName: "jiraBox",
	render: function(){
		return (
			React.createElement("div", {className: "box"}, 
				"Hello"
			)
		);
	}
});

React.render(
	React.createElement("jiraBox", null),
	document.getElementById('jiraBox')
);