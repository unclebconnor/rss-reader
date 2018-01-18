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
			feeds: [],
      selectFeed: '',
      selectedFeedUrl: ''
		}
		this.addFeed = this.addFeed.bind(this);
    this.selectFeed = this.selectFeed.bind(this);
	}

	componentDidMount(){
		axios.get('/feed', {
			params: {
				userId: this.props.userId
			}
      	}).then(response => {
      		this.setState({
      			userId: this.props.userId,
      			feeds: response.data
      		})
      	}).catch(err => {
        	console.log(err)
      	})	
	}

  selectFeed(e){
    var name = e.target.getAttribute('data-feedName')
    var url = e.target.getAttribute('data-feedUrl')
    this.setState({
      selectedFeed: name,
      selectedFeedUrl: url
    })
  }

	addFeed(feedName,feedUrl){
		axios.post('/feed', {
        	userId: this.state.userId,
        	feedName: feedName,
        	feedUrl: feedUrl
      	}).then(response => {
      		this.setState({
      			feeds: response.data
      		})
      	}).catch(err => {
        	console.log(err)
      	})
	}

  	render() {
      console.log('READER MAIN STATE: ',this.state)
    	return (
    	  <div className="readerMainWrapper">
    	  	<div className="sidebarTop lilPadding">
            <Feeds 
              feeds={this.state.feeds} 
              selectFeed={this.selectFeed} 
              selectedFeed={this.state.selectedFeed}
            />
          </div>
    	  	<div className="sidebarBottom lilPadding">
            <AddFeed addFeed={this.addFeed}/>
          </div>
    	  	<div className='articleWindow lilPadding'>
            <ArticleView selectedFeedUrl={this.state.selectedFeedUrl}/>
          </div>
    	  </div>
    	);
	}
}

export default ReaderMain;