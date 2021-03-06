import React, { Component } from 'react';
import '../App.css';

class Feeds extends Component {
	constructor(props){
		super(props);
		this.state={
			feeds:[]
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			feeds: nextProps.feeds
		})
	}


  	render() {
  		let feedList = this.state.feeds.map((feed, index) => {
  			return(
  				<li key={index}>
  					<div 
              data-feedUrl={feed.feedUrl} 
              data-feedName={feed.feedName}
              onClick={this.props.selectFeed}
            >{feed.feedName}</div>
  				</li>
  			)
  		})

    	return (
    	  <div>
    	  	Feeds Sidebar
    	  	<ul>{feedList}</ul>
    	  </div>
    	);
	}
}

export default Feeds;