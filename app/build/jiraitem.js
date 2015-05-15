var JiraItem = React.createClass({displayName: "JiraItem",
	render: function() {
		return(
			React.createElement("li", {className: "collection-item avatar"}, 
				React.createElement("img", {className: "circle responsive-img", src: this.props.itemData.pull_request.user.avatar_url, alt: "d"}), 
				React.createElement("span", {className: "title"}, this.props.itemData.pull_request.title, ":", this.props.itemData.action), 
				React.createElement("span", {className: "badge"}, this.props.itemData.pull_request.statu), 
				React.createElement("p", null, 
					this.props.itemData.pull_request.number, React.createElement("br", null), 
					this.props.itemData.pull_request.user.login
					
				)
			)
		);
	}
});



