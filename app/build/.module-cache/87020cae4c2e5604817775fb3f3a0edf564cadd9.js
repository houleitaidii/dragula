var JiraBox = React.createClass({displayName: "JiraBox",
	render: function(){
		return (
			React.createElement("div", {className: "box"}, 
				React.createElement("h1", null, "Hello")
			)
		);
	}
});

React.render(
	React.createElement(JiraBox, null),
	document.getElementById('jiraBox')
);