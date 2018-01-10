import React, { Component } from 'react';
import '../App.css';
import AddFeed from './AddFeed.js';
import Feeds from './Feeds.js';
import ArticleView from './ArticleView.js';

class ReaderMain extends Component {
	constructor(props){
		super(props);
		this.state={

		}
	}


  	render() {
    	return (
    	  <div className="readerMainWrapper">
    	  	<div className="sidebarTop"><Feeds /></div>
    	  	<div className="sidebarBottom"><AddFeed /></div>
    	  	<div className='articleWindow'><ArticleView /></div>
    	  </div>
    	);
	}
}

export default ReaderMain;