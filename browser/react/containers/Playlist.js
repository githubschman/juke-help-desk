import React, { Component } from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist'

export default class FilterableArtistsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            inputvalue: ''
        }
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValue(e){
        const value = e.target.value 
        console.log('our event is being handled???')
        this.setState({inputvalue: value})
    }
    
    handleSubmit(e) {
		e? e.preventDefault() : null;
        console.log(this.state.inputvalue)
        this.state.inputvalue = '';
	}

    render(){

        return(

            <NewPlaylist 
            handleValue={this.handleValue}
            handleSubmit={this.handleSubmit}
            inputvalue={this.state.inputvalue}
            />
        )

    }

}