import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './common.css';
class Directory extends Component {
    state = { 
                subscribers: [
                                {name: "Bharath", Phone: 9657865567},
                                {name: "Kavya", Phone: 9657865599},
                                {name: "Vasishta", Phone: 9657865566},
                                ],
                subscriberToBeadded: {name:"", Phone:0}
            } 

        constructor(){
            console.log("constructor is called");
            console.log("...........................................");
            super();
            
        }
        componentDidMount(){
            // this happens only once .. so use it for initialization
            console.log("This method is used for one time initialization logic..like settting initial values from db ");
            console.log("...........................................");
        }

        componentDidUpdate(){
            console.log("component updated.. because somebody changed some state variables");
            console.log("This meethod is used for typical logging..or updating db via web call");
            console.log("...........................................");
        }
    AddSubscriber=()=>{
        // we normally do not access input elements directly
        //rather we wou0ld bind the state/data with the input and wait when the changes happens
        console.log("added new record");
        console.log(this.state.subscriberToBeadded);
        var copyOfSubscribers = [...this.state.subscribers];
        copyOfSubscribers.push(this.state.subscriberToBeadded);
        this.setState({subscribers:copyOfSubscribers});// this will render the ui
        this.setState({subscriberToBeadded: {name:"", Phone:0}});
    }
    onNameChanged=(e)=>{
        //e is event arguments
        console.log("name input controls changes its values");
        this.setState({
            subscriberToBeadded:{
                ...this.state.subscriberToBeadded , name: e.target.value
            }
        })
    }
    onPhoneNumberChanged=(e)=>{
        console.log("phone number input controls changes its values");
        this.setState({
            subscriberToBeadded:{
                ...this.state.subscriberToBeadded , Phone: e.target.value
            }
        })
    }
    render() { 
        console.log("render is called.....");
        console.log("...........................................");
        return (
                <div>
                    <div className= 'mydiv'>                    <table className='table table-bordered mytable'>
                        <tbody>                        
                        <tr>
                            <td>Enter subscriber Name: </td>
                            <td>
                                 <input type="text" 
                                 value={this.state.subscriberToBeadded.name} 
                                 onChange={this.onNameChanged}></input></td>
                        </tr>
                        <tr>
                            <td>Enter subscriber Phone Number: </td>
                            <td> <input type="text" 
                             value={this.state.subscriberToBeadded.Phone}
                             onChange={this.onPhoneNumberChanged}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2} className = 'myTd'>
                            <button onClick={this.AddSubscriber}>Add Subscriber</button>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                    </div>

                  
                   <hr></hr>
              <div className='mydiv'>
              {
                    this.state.subscribers.map((subscriber)=>{
                    //  className is attribute from JSX syntax which will be converted
                    // into class = "" later on after we get final css/js
                        return <div className='alert-danger mystyle' key={subscriber.Phone}>
                            <h1>{subscriber.name}</h1>
                            <h3>{subscriber.Phone}</h3>
                            <hr></hr>
                        </div>

                    })
                }
              </div>
                </div>
            );
    }
}
 
export default Directory;