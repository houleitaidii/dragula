var LoadMore = React.createClass({
	handleClick: function(event){
		var page = this.refs.page.getDOMNode().value.trim();
		var page = parseInt(page);
		page = page + 1;
		this.refs.page.getDOMNode().value = page;
		boxhanlderLoadmore = this.props.onLoadmoreClick;
		boxhanlderLoadmore(this);
	},
	render: function(){
		return (
			<div>
				<input type="button" name="loadmore" value={this.props.page} ref="page" onClick={this.handleClick} />
			</div>
		);
	}
});


var JiraBox = React.createClass({
	getInitialState: function(){
		return {data: [], incr_data:[], page: 1};
	},
	loadDataFromServer: function() {
		$(".progress").show();
		var api = restful("54.213.55.78").port(3000);
		var pulls = api.all("pulls");
		var box = this;
		var pullEntity_array = [];
		pulls.getAll({page:box.state.page}).then(function(response){
		  var pullEntity = response.body();
		  for(var i=0;i<pullEntity.length;i++){
			  var pull_data = pullEntity[i].data();
			  pullEntity_array.push(pull_data);
		  };
		  box.setState({incr_data:pullEntity_array});
		  if(box.state.data.length == 0){
		  	box.setState({data:pullEntity_array});
		  }else{
			var incr_data = box.state.incr_data;
			var origin_data = box.state.data; 
			var incred_data = origin_data.concat(incr_data);
		    box.setState({data: incred_data});
		    }
		  $(".progress").hide();
		});
	},
	componentDidMount: function(){
		this.loadDataFromServer();
	},
	handleLoadmoreClick:function(loadmore){
		var page_number = loadmore.refs.page.getDOMNode().value;
		this.state.page = page_number;
		this.loadDataFromServer();
	},
	render: function(){
		return (
			<div className="box">
				<JiraList data={this.state.data}/>
				<LoadMore page={this.state.page} onLoadmoreClick={this.handleLoadmoreClick}/>
			</div>			
		);
	}
});


React.render(
	<JiraBox />,
	document.getElementById('jiraBox')
);
