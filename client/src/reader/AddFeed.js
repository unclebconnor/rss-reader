import React, { Component } from 'react';
import '../App.css';

class AddFeed extends Component {
	constructor(props){
		super(props);
		this.state={

		}
	} 

	handleSubmit(){
		this.props.addFeed()
	}

  	render() {
    	return (
    	  <div>
    	  	AddFeed Sidebar
    	  	<button onClick={(e) => this.handleSubmit(e)}>PUSH</button>
    	  </div>
    	);
	}
}

export default AddFeed;