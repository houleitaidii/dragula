var JiraList = React.createClass({
	render: function(){
		var jiraItems = this.props.data.map(function(jiraitem){
		return (
				<JiraItem itemData={jiraitem}>
					
				</JiraItem>
			)
		});
		return(
			<div className="list">
				<ul className="collection">
					{jiraItems}
				</ul>
			</div>
		)
	}
});
