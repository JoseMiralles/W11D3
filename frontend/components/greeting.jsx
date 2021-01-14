import React from "react";
import { Link } from "react-router-dom"

export default class Greeting extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        
        let greeting;

        if (this.props.currentUser){
            greeting = 
            <div>
                <h2>Hi, {this.props.currentUser.username}!</h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        } else {
            greeting = 
            <div>
                <h2>Welcome, please login:</h2>
                <Link to="/signup"><button>Signup</button></Link>
                <Link to="/login"><button>Login</button></Link>
            </div>
        }

        return( <div>{greeting}</div> );
    }

}