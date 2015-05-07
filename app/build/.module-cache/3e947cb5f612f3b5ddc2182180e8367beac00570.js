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
	React.createElement(JiraBox, {url: "http://54.213.55.78:3000/git/pull/log/?jira=VTWO-180", pollInterval: 2000}),
	document.getElementById('jiraBox')
);