import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {name:"Kavya"} ;
  
    //   changeCompanyName=()=>{
    //     this.setState({name: "ABCD"});
    //     //parent only owns the data can only change data
    //     // no child or other component change the data
    //     // this means somehow child or anybody needs to call this to make the change 
    //     // in data
    // }
    changeCompanyName=(input)=>{
        this.setState({name: input});
        //parent only owns the data can only change data
        // no child or other component change the data
        // this means somehow child or anybody needs to call this to make the change 
        // in data
    }
    render() { 
        return (
            <div>
                <h1>
                
                    Welcome Parent {this.state.name}    </h1>
                {/* we can keep on passing parameters to the child component using simple 
                attributes = value like key-value pair
                key can be anything taken from state or hardcoded */}
                {/* These key value pairs are further accepted or expected in constructor
                of child component */}
                
                    <Child company={this.state.name} branch="Bangalore" callParent ={this.changeCompanyName} />
                    {/* <child /> will ask react to create object of child class.. it will 
                    call render and render of child returns ..
                    .............................
                     <div>
                      <h1>
                    <hr></hr>
                    Welcome Child Vasishta
                      </h1>
                        </div>
                    ...........................
                    this reply will put up in place of <child/>  */}
            
            </div>
        );
    }
}
 

export default Parent;