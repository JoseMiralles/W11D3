import React from "react";

export default class BenchForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            description: "",
            seating: 1,
            lat: props.lat ? props.lat : "",
            lng: props.lng ? props.lng : ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const benchFormData = { bench: Object.assign({}, this.state) } 
        this.props.createBench( benchFormData ).then(() => {
            this.props.history.push({
                pathname: "/"
            });
        });
    }

    handleChange(key){
        return (e) => {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    render(){
        return(
            <div>
                <h3>Create Bench</h3>

                <label> description:<br/>
                    <input onChange={this.handleChange("description")} type="text"/>
                </label>

                <br/><br/>

                <label> seats:<br/>
                    <input onChange={this.handleChange("seating")} type="number" min="1" max="10"/>
                </label>

                <br/><br/>

                <label> latitude:<br/>
                    <input
                    value={this.state.lat}
                    onChange={this.handleChange("lat")}
                    type="number"
                    disabled={this.props.lat ? true : false}/>
                </label>

                <br/><br/>

                <label> longitude:<br/>
                    <input
                    value={this.state.lng}
                    onChange={this.handleChange("lng")}
                    type="number"
                    disabled={this.props.lng ? true : false}/>
                </label>

                <br/><br/>

                <button onClick={this.handleClick}>submit</button>

            </div>
        );
    }

}