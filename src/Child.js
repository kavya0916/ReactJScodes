
import React, { Component } from 'react';

class Child extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        //props means data passed by parent component in key-value format
        super(props); 
        // since we are using parameterized constructor..
        // its kind of compulsory to call super or base or component class parameterized
        // constructor using super keyword
    }
    Play = ()=>{
        console.log("Child button is clicked");
        // this.props.company="Bharath";//here child is trying to change the props
        // which in turn data from parent or in this case its company .. it is
        // state of parent
        // error u get is this Child.js:12 
        
    //    Uncaught TypeError: Cannot assign to read only property 'company' of object '#<Object>'
    // child has no rights to change props value of parents
    // all props are read only property
    // what if child wants to change
    // 1way is to copy props to one variable and change value that means
    // child can make a copy and change the copy but that wonts change parent data
    // 2way directly change the parent value then we need to ask parent to do so
    // one who owns the data/state can change the data
    
    this.props.callParent("KavyaBharath"); //you are calling parent function which are passed via props
    }
    render() { 
        return (
            <div>
                <h1>
                    <hr></hr>
     Welcome Child Vasishta... parent company is  {this.props.company} from  {this.props.branch}
                </h1>
                <button onClick={this.Play}>Play with data passed by parent</button>
            </div>
        );
    }
}
 

export default Child;