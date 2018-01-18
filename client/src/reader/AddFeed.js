import React, { Component } from 'react';
import '../App.css';

class AddFeed extends Component {
	constructor(props){
		super(props);
		this.state={
			feedName:'',
			feedUrl:''
		}
	}

	handleChangeFeedName(e){
		this.setState({
			feedName: e.target.value
		})
	} 

	handleChangeFeedUrl(e){
		this.setState({
			feedUrl: e.target.value
		})
	} 

	handleSubmit(e){
		e.preventDefault();
		this.props.addFeed(this.state.feedName,this.state.feedUrl)
		this.setState({
			feedName:'',
			feedUrl:''
		})
	}

  	render() {
      console.log('ADD FEED STATE: ', this.state)
    	return (
    	  	<div>
    	  		<div>Add a RSS Feed</div>
    	  		<button 
    	  			className='button'
    	  			onClick={(e) => this.handleSubmit(e)}
    	  		>Add Feed</button>
    	  		<div className="field">
  					<label className="label">Feed Name</label>
  					<div className="control">
    					<input 
    						className="input" 
    						type="text"
    						value={this.state.feedName} 
    						placeholder="Type name of feed"
    						onChange={(e) => this.handleChangeFeedName(e)}
    					/>
  					</div>
				</div>
				<div className="field">
  					<label className="label">Feed Url</label>
  					<div className="control">
    					<input 
    						className="input" 
    						type="text"
    						value={this.state.feedUrl} 
    						placeholder="Text input"
    						onChange={(e) => this.handleChangeFeedUrl(e)}
    					/>
  					</div>
				</div>
    	  </div>
    	);
	}
}

export default AddFeed;