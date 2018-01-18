import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class ArticleView extends Component {
	constructor(props){
		super(props);
		this.state={
			feeds: [{
				title:"",
				link:"",
				description:"",
				content:""
			}]
		}
	}

	componentWillReceiveProps(nextProps){
		axios.get('/getRss/?url='+ nextProps.selectedFeedUrl)
		.then((response) => {
			var feeds = response.data.feeds
			var version = response.data.version
			this.setState({
				feeds: feeds,
				version: version
			})
		}).catch(function(error){
			console.log(error)
		})
	}

  	render() {
  		let articles = this.state.feeds.map((feed, index) => 
  			<div className="itemWrapper" key={index}>
  				<a href={feed.link} className="is-size-4">{feed.title}</a>
  				<div dangerouslySetInnerHTML={{__html: `${feed.content}`}}></div>
  				<hr/>
  			</div>
  		);

    	return (
    	  <div className="container is-fluid">
    	  	<div>Eventually name of selected feed</div>
    	  	<div>{articles}</div>
    	  </div>
    	);
	}
}

export default ArticleView;