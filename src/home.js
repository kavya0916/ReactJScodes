// ES6
// In order to use this function in some other JS file 

import { Component } from "react";


// // so we need to export it
// export default function Home(){
//     return <h1>Hello , Welcome Home</h1>
// }

export default class Home1 extends Component{
    // name = 'UpGrad';
    state={name: "UpGrad"};
    // state is inbuilt object which is meant for storing some data needed by your component
    // if the state is changed using "setState" function..it will call
    // render method and update UI
        ExecuteMe=()=>{
        // this.name = "Changed..";
        // this.render(); //this render never call by ourself
        console.log("Hi....U clicked on button")
        this.setState({name: "Changed.."});//this setState is inbulit function
        // coming from the parent class.. this function when called..
        // eventaully internally called render method and update UI
    }
    render(){
        return <div>     
                     <h1>Hello, Welcome to {this.state.name}</h1>
                     <button onClick={this.ExecuteMe}>Click Me</button>
               </div>
  
    }
}