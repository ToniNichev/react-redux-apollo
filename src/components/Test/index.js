import React, { Component } from 'react';
import TestContainer from '../../containers/TestContainer';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
        text: "click"
    };
  }


  buttonClicked = () => {
    let r = TestContainer.add();
    //this.setState(state => {test: `CLICKED: ${r}`});

    this.setState((prevState) => {
      // Important: read `prevState` instead of `this.state` when updating.
      return {text: `CLICKED: ${r}`}
    });    
  }


  render() {
    return (
      <p><button onClick={() => this.buttonClicked() }>{this.state.text}</button> </p>
      );
  }
}


export default Test
