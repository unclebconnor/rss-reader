import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import AddFeed from './AddFeed.js';
import Feeds from './Feeds.js';
import ArticleView from './ArticleView.js';

class ReaderMain extends Component {
	constructor(props){
		super(props);
		this.state={
			userId:'',
			feeds: []
		}
		this.addFeed = this.addFeed.bind(this);
	}

	componentDidMount(){
		this.setState({
			userId:this.props.userId
		})
		
	}

	addFeed(feedName,feedUrl){
		axios.post('/feed', {
        	userId: this.state.userId,
        	feedName: feedName,
        	feedUrl: feedUrl
      	}).then(response => {
        	console.log("add feed response", response)
     
      	}).catch(err => {
        	console.log(err)
      	})
	}


  	render() {
  		console.log("READER MAIN STATE", this.state)
    	return (
    	  <div className="readerMainWrapper">
    	  	<div className="sidebarTop lilPadding"><Feeds /></div>
    	  	<div className="sidebarBottom lilPadding"><AddFeed addFeed={this.addFeed}/></div>
    	  	<div className='articleWindow lilPadding'><ArticleView /></div>
    	  </div>
    	);
	}
}

export default ReaderMain;