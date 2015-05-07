var JiraBox = React.createClass({displayName: "JiraBox",
	render: function(){
		return (
			React.createElement("div", {className: "box"}, 
				"Hello"
			)
		);
	}
});

React.render(
	React.createElement(JiraBox, null),
	document.getElementById('jiraBox')
);