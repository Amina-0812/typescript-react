import React from 'react'; //importing react from react is an obligatory step in both JS and TSC


//in the original Javascript code in the checkpoint we had first to define the const and give it a props
//meanwhile in the Typescript code we define an interface for the component props by typing:
interface GreetingProps { //(GreetingProps) this typescript interface define the shape of props and adds type safety ensuring that props follows the specified structure
  name: string; //here we are specifying that the "name" should be a string meanwhile in js we type {name}
}

//this is a functional component with props typed according to the interface
//we put React.FC<GreetingProps> to indicate that it's a functional component (.FC) and accept GreetingProps as props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    //we are next returning a div element with the greeting msg that includes the props value "name"
  return <div>Hello, {name}!</div>;
};
//as we usually do in jsx, we export the greeting component so we can use it in other components of the app
export default Greeting;
