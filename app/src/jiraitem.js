var JiraItem = React.createClass({
	render: function() {
		return(
			<li className="collection-item avatar">
				<img className="circle responsive-img" src={this.props.itemData.pull_request.user.avatar_url} alt="d"/>
				<span className="title">{this.props.itemData.pull_request.title}:{this.props.itemData.action}</span>
				<span className="badge">{this.props.itemData.pull_request.statu}</span>
				<p>
					{this.props.itemData.pull_request.number}<br />
					{this.props.itemData.pull_request.user.login}
					
				</p>
			</li>
		);
	}
});



