var JiraItem = React.createClass({
	render: function() {
		return(
			<li className="collection-item avatar">
				<img className="circle responsive-img" src={this.props.itemData.pull_request.user.avatar_url} alt=""/>
				<span className="title"><a href={this.props.itemData.pull_request.html_url}>{this.props.itemData.pull_request.title}</a> : {this.props.itemData.action}</span>
				<span className="badge">{this.props.itemData.pull_request.statu}</span>
				<p>
					{this.props.itemData.pull_request.head.ref} <span className="octicon octicon-git-pull-request"></span> {this.props.itemData.pull_request.base.ref}<br />
					{this.props.itemData.pull_request.user.login}
				</p>
			</li>
		);
	}
});



