var JiraBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	loadDataFromServer: function() {
		var api = restful("54.213.55.78").port(3000);
		var pulls = api.all("pulls");
		var box = this;
		var pullEntity_array = [];
		pulls.getAll({page:1}).then(function(response){
		  var pullEntity = response.body();
		  for(var i=0;i<pullEntity.length;i++){
			  var pull_data = pullEntity[i].data();
			  pullEntity_array.push(pull_data);
//			  if(i>10){
//			  break;}
		  };
		  box.setState({data:pullEntity_array});
		});
	},
	componentDidMount: function(){
		this.loadDataFromServer();
//		setInterval(this.loadDataFromServer, this.props.pollInterval);
		$(".progress").hide();
	},
	render: function(){
		return (
			<div className="box">
				<JiraList data={this.state.data}/>
			</div>
		);
	}
});

React.render(
	<JiraBox />,
	document.getElementById('jiraBox')
);
