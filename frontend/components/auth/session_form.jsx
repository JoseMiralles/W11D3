import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const userForm = Object.assign({}, this.state);
        this.props.processForm({user: userForm});
    }

    handleChange(key){
        return (e) => {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    render(){

        const linkText = this.props.formType === "login" ? "signup" : "login";
        const errors = this.props.errors.map((err) => {
            return <li>{err}</li>;
        });

        return (
            <div>
                <ul>{errors}</ul>

                <h2>{this.props.formType}</h2>

                <form>

                    <label>username:<br/>
                        <input onChange={this.handleChange("username")} type="text"/>
                    </label>

                    <br/>

                    <label>password:<br/>
                        <input onChange={this.handleChange("password")} type="password"/>
                    </label>

                    <br/><br/>

                    <button onClick={this.handleSubmit}>submit</button>

                </form>

                <br/>

                <div>
                    Want to
                    &nbsp;<Link to={`/${linkText}`}>{linkText}</Link>&nbsp;
                    instead?
                </div>

            </div>
        );
    }

}