import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class ArticleView extends Component {
	constructor(props){
		super(props);
		this.state={

		}
	}

	componentWillReceiveProps(nextProps){
		console.log('derp')
		axios.get('/getRss/?url='+ nextProps.selectedFeedUrl)
		.then(function(response){
			console.log("article view response: ",response.data)
		}).catch(function(error){
			console.log(error)
		})
	}

  	render() {
    	return (
    	  <div>
    	  	<div>ArticleView Window</div>
    	  	<div>{this.props.selectedFeedUrl}</div>
    	  </div>
    	);
	}
}

export default ArticleView;