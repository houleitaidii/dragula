var JiraItem=React.createClass({displayName:"JiraItem",render:function(){return React.createElement("li",{className:"collection-item avatar"},React.createElement("img",{className:"circle responsive-img",src:this.props.itemData.pull_request.user.avatar_url,alt:""}),React.createElement("span",{className:"title"},React.createElement("a",{href:this.props.itemData.pull_request.html_url},this.props.itemData.pull_request.title)," : ",this.props.itemData.action),React.createElement("span",{className:"badge"},this.props.itemData.pull_request.statu),React.createElement("p",null,this.props.itemData.pull_request.head.ref," ",React.createElement("span",{className:"octicon octicon-git-pull-request"})," ",this.props.itemData.pull_request.base.ref,React.createElement("br",null),this.props.itemData.pull_request.user.login))}}),JiraList=React.createClass({displayName:"JiraList",render:function(){var e=this.props.data.map(function(e){return React.createElement(JiraItem,{itemData:e})});return React.createElement("div",{className:"list"},React.createElement("ul",{className:"collection"},e))}}),LoadMore=React.createClass({displayName:"LoadMore",handleClick:function(e){var t=this.refs.page.props.value,t=parseInt(t);t+=1,this.refs.page.getDOMNode().value=t,boxhanlderLoadmore=this.props.onLoadmoreClick,boxhanlderLoadmore(this)},render:function(){return React.createElement("div",{className:"fixed-action-btn",style:{bottom:"24px",right:"24px"}},React.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red",value:this.props.page,ref:"page",onClick:this.handleClick},React.createElement("i",{className:"large mdi-navigation-more-horiz"})))}}),JiraBox=React.createClass({displayName:"JiraBox",getInitialState:function(){return{data:[],incr_data:[],page:1}},loadDataFromServer:function(){$(".progress").show();var e=restful("54.213.55.78").port(3e3),t=e.all("pulls"),a=this,r=[];t.getAll({page:a.state.page}).then(function(e){for(var t=e.body(),s=0;s<t.length;s++){var l=t[s].data();r.push(l)}if(a.setState({incr_data:r}),0==a.state.data.length)a.setState({data:r});else{var i=a.state.incr_data,c=a.state.data,n=c.concat(i);a.setState({data:n})}$(".progress").hide()})},componentDidMount:function(){this.loadDataFromServer()},handleLoadmoreClick:function(e){var t=e.refs.page.getDOMNode().value;this.state.page=t,this.loadDataFromServer()},render:function(){return React.createElement("div",{className:"box"},React.createElement(JiraList,{data:this.state.data}),React.createElement(LoadMore,{page:this.state.page,onLoadmoreClick:this.handleLoadmoreClick}))}});React.render(React.createElement(JiraBox,null),document.getElementById("jiraBox"));

var JiraItem=React.createClass({displayName:"JiraItem",render:function(){return React.createElement("li",{className:"collection-item avatar"},React.createElement("img",{className:"circle responsive-img",src:this.props.itemData.pull_request.user.avatar_url,alt:""}),React.createElement("span",{className:"title"},React.createElement("a",{href:this.props.itemData.pull_request.html_url},this.props.itemData.pull_request.title)," : ",this.props.itemData.action),React.createElement("span",{className:"badge"},this.props.itemData.pull_request.statu),React.createElement("p",null,this.props.itemData.pull_request.head.ref," ",React.createElement("span",{className:"octicon octicon-git-pull-request"})," ",this.props.itemData.pull_request.base.ref,React.createElement("br",null),this.props.itemData.pull_request.user.login))}});
var JiraList=React.createClass({displayName:"JiraList",render:function(){var e=this.props.data.map(function(e){return React.createElement(JiraItem,{itemData:e})});return React.createElement("div",{className:"list"},React.createElement("ul",{className:"collection"},e))}});