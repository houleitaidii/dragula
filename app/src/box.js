var JiraBox = React.createClass({
	getInitalState: function(){
		return {data: []};
	},
	loadDataFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'GET',
			success: function(data){
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){
		this.loadDataFromServer();
//		setInterval(this.loadDataFromServer, this.props.pollInterval);
	},
	render: function(){
		return (
			<div className="box">
				Hello
			</div>
		);
	}
});

React.render(
	<JiraBox url="http://54.213.55.78:3000/git/pull/log/?jira=VTWO-180" pollInterval={2000}/>,
	document.getElementById('jiraBox')
);