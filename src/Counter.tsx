import React, { Component } from 'react'; //we are importing here the react and component class from 'react'

//to start working on our class component in TSC we define an interface for the component state
interface CounterState {
  count: number; //we are here specifying that our 'count' must be a number
}

//like in jsx, we always mention that the class component extended from Component of React
class Counter extends Component<{}, CounterState> { //by typing : <{}, CounterState>, this syntax is used to  specify that the component does not receive any props ({}) and that its state follows the CounterState structure
    //we are initializing state and set the count to 0
  state: CounterState = {
    count: 0,
  };
//just like the jsx code, this is the method to increment the count state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
//this part of the code also looks just like JSX code 
  render() {
    //this jsx syntax inside the render display the count from the component's state and attach an onClick event listener to the button to handle incrementing the count
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
//and here we are exporting the counter component so we can use it in other components
export default Counter;
