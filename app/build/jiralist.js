var JiraList = React.createClass({displayName: "JiraList",
	render: function(){
		var jiraItems = this.props.data.map(function(jiraitem){
		return (
				React.createElement(JiraItem, {itemData: jiraitem}
					
				)
			)
		});
		return(
			React.createElement("div", {className: "list"}, 
				React.createElement("ul", {className: "collection"}, 
					jiraItems
				)
			)
		)
	}
});
